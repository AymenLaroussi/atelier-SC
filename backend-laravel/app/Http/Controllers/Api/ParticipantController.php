<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Participant;
use Illuminate\Http\Request;
use App\Models\Atelier;
use App\Models\User;

class ParticipantController extends Controller
{
    public function index()
    {
        return response()->json(Participant::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'email' => 'required|email|unique:participants,email',
        ]);

        $participant = Participant::create($validated);

        return response()->json($participant, 201);
    }

    public function AtelierParticipants($atelierId, $participantId)
    {
        $user = \App\Models\User::find($participantId);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $participant = \App\Models\Participant::where('email', $user->email)->first();
        if (!$participant) {
            return response()->json(['error' => 'No matching participant found for this user'], 404);
        }

        $atelier = \App\Models\Atelier::find($atelierId);
        if (!$atelier) {
            return response()->json(['error' => 'Atelier not found'], 404);
        }

        $isRegistered = $atelier->participants()->where('participants.id', $participant->id)->exists();

        if ($isRegistered) {
            return response()->json([
                'message' => 'Participant is already registered to this workshop.'
            ], 200);
        }

        $atelier->participants()->attach($participant->id);

        return response()->json([
            'atelier_id' => $atelierId,
            'participant_id' => $participant->id,
            'is_registered' => true,
            'message' => 'Participant successfully registered to the atelier.'
        ], 201);
    }



}

