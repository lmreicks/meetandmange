<?php
include "errors.php";
#include "const_errors.php";
use Slim\Http\Request;
use Slim\Http\Response;
use Models\Event;
use Models\User;
use Models\EventLookup;


$app->get('/api/event', function (Request $request, Response $response, array $args) {

    #have to go through event mappings, and get all events which the user is included in and add
    #them to the array of events to be returned to lexi
    $user = $request->getAttribute('user');
    $events = $user->events();
    $return = json_encode(/*however I call serializer*/);
    $response->getBody()->write($return);
    return $response;
});

$app->post('/api/event', function (Request $request, Response $response, array $args) {
    
    # need to parse through list of members given in the $request body
    # if the email is in the database, add it to the table mapping events with all of it's members
    # at some point down the road we will add an email api to this to include non members into all of the "fun"

    $body = json_decode($request->getBody());
    $user = $body->getAttributes('user');
    $event = new Event;
    $validate = new EventValidator($body);
    if ($validate != true) return $validate;

    if ($body->OwnerId == NULL) {
        $response->write('no ownerId');
        return $response;// change to use ann's error handling
    }
    if ($user->id != $body->OwnerId){
        $resonse->write('user id does not match ownerId');
        return $response;// diddo
    }
    if ($body->Title == NULL || $body->Title == '') {
        $response->write('no Title');
        return $response; //diddo^2
    }   

    $event->Title = $body->Title;
    $event->OwnerId = $body->OwnerId;
    $event->StartTime = date("H:i", strtotime(substr($body->StartTime, 0, 8)));
    $event->EndTime = substr($body->EndTime, 0, 8);
    $event->StartDate = substr($body->StartDate, 0, 10);
    $event->EndDate = substr($body->EndDate, 0, 10);
    $event->Notes = $body->Notes;
    $event->Location = $body->Location;

    $event->users()-> attach($body->Members);

    $event->save();
    $eventId = $event->Id;
    $membersArray = $body->members;
    $response->getBody()->write(json_encode($event));
    return $response;
});

$app->delete('/api/event/{id}', function (Request $request, Response $response, array $args){

    $user = $request->getAttribute('user');
    $eventID = $args['id'];
    $event = Event::where('id','=',$eventID)->first();
    if ($event == NULL) {
        $response->write("Event not found");
        return $response;
    }
    $ownerId = $event->ownerId;
    $userId = $user->id;
    if ($ownerId === $id){
        $event = Event::where('id','=',$eventID)->delete();
        EventLookup::where('EventId','=',$eventID)->delete();
        $response->write(json_encode($event));
        return $response;
    }
    $response->write("Not your event to delete");
    return $response; //switch to error for not owner of event
});

$app->put('/api/event', function (Request $request, Response $response, array $args) {
    $body = json_decode($request->getBody());
    $event_id = $body->Id;

    $event = Event::find($event_id);
    echo $event;
    $user = $request->getAttributes('user');
    // if ($user->id != $event->OwnerId){
    //     $response->getBody()->write("not your event to edit");
    //     return $response;
    // }
    if($event != null){
        $newTitle = $event->title;
        $event->Title = $newTitle;
        #should not be able to switch owner
        //$events->OwnerId = $body->OwnerId;
        $event->StartTime = substr($body->StartTime, 0, 8);
        $event->EndTime = substr($body->EndTime, 0, 8);
        $event->StartDate = substr($body->StartDate, 0, 10);
        $event->EndDate = substr($body->EndDate, 0, 10);
        $event->Notes = $body->Notes;
        $event->Location = $body->Location;
        $event->Members = $body->Members;

        
        $event->save();

        $response->getBody()->write(json_encode($event));

    }
    else{
        $response->getBody()->write(errorResponse('8'));

    }
    return $response;

});

class EventValidator {
    public function __invoke($body){
        if ($body->StartDate == NULL) return false;
        if ($body->EndDate == NULL) return false;


        
        $title = $body->Title;
        
        $location = $body->Location;
        $StartDate = explode('-',$body->StartDate);
        $endDate = explode('-',$body->EndDate);
        $startTime = explode(':', $body->StartTime);
        $endTime = explode(':', $body->EndTime);
        $eTime = $endTime[0] * 3600 + $endTime[1] * 60 + $endTime[2];
        $sTime = $startTime[0] * 3600 + $startTime[1] * 60 + $startTime[2];
        if ($endDate[2] < $startDate[2]) return false;
        if ($endDate[2] == $startDate[2] && $endDate[0] < $startDate[0]) return false;
        if ($endDate[2] == $startDate[2] && $endDate[0] == $startDate[0] && $endDate[1] < $startDate[1]) return false;
        if ($endDate[2] == $startDate[2] && $endDate[0] == $startDate[0] && $endDate[1] == $startDate[1]) return false;
        if ($endDate[2] == $startDate[2] && $endDate[0] == $startDate[0] && $endDate[1] == $startDate[1] && $eTime < $sTime) return false;
        if ($title == NULL) return false;
        
        return true;
    }
}