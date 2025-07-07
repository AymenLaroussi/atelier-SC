<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    protected $fillable = ['nom', 'email','password'];
    
    public function ateliers()
    {
        return $this->belongsToMany(Atelier::class, 'atelier_participant')->withTimestamps();
    }
}
