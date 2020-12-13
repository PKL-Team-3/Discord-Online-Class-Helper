<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Jadwal;



class JadwalController extends Controller
{
    public function create(Request $request, Jadwal $jadwal, User $user){
        $result = $request->validate([
            'title' => 'required',
            'tanggal' => 'required',
            'jam' => 'required'
        ]);

        Auth()->user()->jadwals()->create($result);

        return response()->json([
            'success' => true,
            'title' => $request->title,
            'tanggal' => $request->tanggal,
            'jam' => $request->jam
        ], 201);
    }
}
