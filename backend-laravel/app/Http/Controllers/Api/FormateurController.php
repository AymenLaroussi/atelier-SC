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

    public function ateliers($id)
    {
        $formateur = Formateur::with('ateliers.participants')->findOrFail($id);
        return response()->json($formateur->ateliers);
    }
}

