<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /**
     * Relaciones
     */

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
