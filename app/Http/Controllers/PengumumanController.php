<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pengumuman;
use App\Models\User;

class PengumumanController extends Controller
{
    public function create(Request $request, Pengumuman $pengumuman){
        $result = $request->validate([
            'user_id' => 'required',
            'title' => 'required',
            'content' => 'required',
        ]);

        Auth()->user()->pengumumans()->create($result);

        return var_dump($test);
        
        return response()->json([
            'success' => true,
            'id' => $user->id,
            'username' => $user->username,
        ], 201);
    }
    
}
