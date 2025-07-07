<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Formateur;

class FormateurController extends Controller
{
    // List all formateurs (optional)
    public function index()
    {
        return response()->json(Formateur::all());
    }

    // Get ateliers (and participants) for a formateur (formateur view)
    public function ateliers($id)
    {
        $formateur = Formateur::with('ateliers.participants')->findOrFail($id);
        return response()->json($formateur->ateliers);
    }
}

