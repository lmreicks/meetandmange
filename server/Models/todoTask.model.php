<?php

namespace Models;

class todoTask extends \Illuminate\Database\Eloquent\Model {
    protected $table = 'todoTask';

    protected $fillable = [
        'ownerId', 'description', 'done'
    ];
}

?>