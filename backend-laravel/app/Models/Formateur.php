<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Formateur extends Model
{
    protected $fillable = ['nom', 'email'];

    public function ateliers()
    {
        return $this->hasMany(Atelier::class);
    }
}
