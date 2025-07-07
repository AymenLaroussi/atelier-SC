<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Participant;

class ParticipantController extends Controller
{
    // List participants (for admin)
    public function index()
    {
        return response()->json(Participant::all());
    }
}

