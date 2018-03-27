<?php

namespace Logic\ModelSerializers;

use Logic\ModelSerializers\ModelSerializer;
use Models\User;
use Models\Event;
use Logic\ModelSerializers\UserSerializer;

class EventSerializer extends ModelSerializer{

    function toApi($model){
        $out = new \stdClass;
        $out->Title = $model->title;
        $out->OwnerId = $model->owner_id;
        $out->StartTime = $model->start_time;
        $out->EndTime = $model->end_time;
        $out->StartDate = $model->start_date;
        $out->EndDate = $model->end_date;
        $out->Location = $model->location;
        $out->Notes = $model->notes;
        $us = new UserSerializer;
        $out->Members = $us->toApiList($model->users);
 
        return $out;
    }

    function toApiList($models){
        $serializedList = Array();
        foreach ($models as $model){
            array_push($serializedList, $this->toApi($model));
        }
        return $serializedList;
    }

    function toServer($model){
        $in = new Event;
        $in->title = $model->Title;
        $in->owner_id = $model->OwnerId;
        $in->start_time = $model->StartTime;
        $in->end_time = $model->EndTime;
        $in->start_date = $model->StartDate;
        $in->end_date = $model->EndDate;
        $in->location = $model->Location;
        $in->notes = $model->Notes;
        return $in;

    }

    function toServerList($models){
        $serverList = Array();
        foreach($models as $model){
            array_push($serverList, $this->toServer($model));
        }
        return $serverList;
    }

}