<?php

namespace Logic\ModelSerializers;

use Logic\ModelSerializers\ModelSerializer;
use Models\User;
use Slim\Http\Request;
use Slim\Http\Response;
use Models\Event;
use Models\EventLookup;

class EventSerializer extends ModelSerializer{

    function toApi($model){
        return array(
            'Title' => $model->title,
            'OwnerId' => $model->owner_id,
            'StartTime' => $model->start_time,
            'EndTime' => $model->end_time,
            'StartDate' => $model->start_date,
            'EndDate' => $model->end_date,
            'Location' => $model->location,
            'Notes' => $model->notes,
            'Notification' => $model->notification,
            'Members' => $model->users(),
            'GroupId' => $model->group_id,
            'Recurring' => $model->recurring
        );
    }

    function toApiList($models){
        $serializedList = Array();
        foreach ($models as $model){
            array_push($serializedList, $this.toApi($model));
        }
        return json_encode($serializedList);
    }

    function toServer($model){
        $in = new Event;
        $in->title = $model['Title'];
        $in->owner_id = $model['OwnerId'];
        $in->start_time = $model['StartTime'];
        $in->end_time = $model['EndTime'];
        $in->start_date = $model['StartDate'];
        $in->end_date = $model['EndDate'];
        $in->location = $model['Location'];
        $in->group_id = $model['Location'];
        $in->notes = $model['Notes'];
        $in->notification = $model['Notification'];
        $in->recurring = $model-['Recurring'];
    }

    function toServerList($models){
        $serverList = Array();
        foreach($models as $model){
            array_push($serverList, $toServer($model));
        }
        return $serverList;
    }

}