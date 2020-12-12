<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Discord;
use App\Models\User;

class DiscordController extends Controller
{
    public function create(Request $request, Discord $discord, User $user){
        $result = $request->validate([
            'user_id' => 'required',
            'username' => 'required',
            'avatar_url' => 'required',
        ]);

        $discord->create($result);
        
        return response()->json([
            'success' => true,
            'id' => $result->id,
            'username' => $result->username,
        ], 201);
    }
}
