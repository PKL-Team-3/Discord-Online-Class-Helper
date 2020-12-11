<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Materi;
use App\Models\User;


class MateriController extends Controller
{
    public function create(Request $request, Materi $materi, User $user){
        $result = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'type' => 'required',
            'attachment' => 'required'

        ]);

        
        // return var_dump($result);
        Auth()->user()->materis()->create($result);

        
        
        return response()->json([
            'success' => true,
            'data' => $result,
            // 'username' => $user->username,
        ], 201);
    }
}
