<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Participant;
use Illuminate\Http\Request;
use App\Models\Atelier;

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
        $atelier = Atelier::with('participants')->find($atelierId);

        if (!$atelier) {
            return response()->json(['error' => 'Atelier not found'], 404);
        }

        $isRegistered = $atelier->participants()->where('participants.id', $participantId)->exists();

        return response()->json([
            'participant_id' => $participantId,
            'atelier_id' => $atelierId,
            'is_registered' => $isRegistered
        ]);
    }

}

