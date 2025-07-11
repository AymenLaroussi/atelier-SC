<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Atelier;
use App\Models\Formateur;
use App\Models\User;
use Illuminate\Http\Request;

class AtelierController extends Controller
{

    public function index()
    {
        $ateliers = Atelier::with('formateur', 'participants')->get();
        return response()->json($ateliers);
    }


    public function store(Request $request)
    {
        $data = $request->validate([
            'titre' => 'required|string',
            'description' => 'nullable|string',
            'formateur_id' => 'required|exists:formateurs,id',
        ]);
        $data['created_at'] = now();
        $data['updated_at'] = now();

        $atelier = Atelier::create($data);
        return response()->json($atelier, 201);
    }

    public function update(Request $request, $id)
    {
        $atelier = Atelier::findOrFail($id);

        $data = $request->validate([
            'titre' => 'sometimes|required|string',
            'description' => 'sometimes|nullable|string',
            'formateur_id' => 'sometimes|required|exists:formateurs,id',
        ]);

        $atelier->update($data);

        return response()->json($atelier);
    }


    public function destroy($id)
    {
        $atelier = Atelier::findOrFail($id);
        $atelier->delete();

        return response()->json(['message' => 'Atelier deleted']);
    }


    public function participants($id)
    {
        $atelier = Atelier::with('participants')->findOrFail($id);
        return response()->json($atelier->participants);
    }

    public function assignFormateur($atelierId, $formateurId)
    {
        $atelier = Atelier::findOrFail($atelierId);
        $formateur = Formateur::findOrFail($formateurId);

        $atelier->formateur()->associate($formateur);
        $atelier->save();

        return response()->json([
            'message' => 'Formateur assigned to Atelier successfully.',
            'atelier' => $atelier->load('formateur'),
        ]);
    }

    public function getAteliersByUserId($userId)
    {
        $user = User::find($userId);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $ateliers = Atelier::with(['formateur'])
            ->whereHas('formateur', function($query) use ($user) {
                $query->where('email', $user->email);
            })
            ->get();

        return response()->json($ateliers);
    }



}

