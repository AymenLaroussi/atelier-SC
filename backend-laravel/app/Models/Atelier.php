<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Atelier extends Model
{
    protected $fillable = ['titre', 'description', 'formateur_id'];
    public function formateur()
    {
        return $this->belongsTo(Formateur::class);
    }
    public function participants()
    {
        return $this->belongsToMany(Participant::class, 'atelier_participant')->withTimestamps();
    }
}
