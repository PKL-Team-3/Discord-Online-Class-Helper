<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pengumuman;
use App\Models\User;

class PengumumanController extends Controller
{
    public function create(Request $request, Pengumuman $pengumuman, User $user){
        $result = $request->validate([
            'user_id' => 'required',
            'title' => 'required',
            'content' => 'required',
        ]);

        Auth()->user()->pengumumans()->create($result);

        // return var_dump($test);
        
        return response()->json([
            'success' => true,
            'id' => $user->id,
            'username' => $user->username,
        ], 201);
    }

    public function get(Pengumuman $pengumuman, Request $request, User $user){
        $datas = $pengumuman->all();
        $user = [];
        foreach ($datas as $data) {
            $userr[] = $data->user->username;
        }
        // $username = Pengumuman::with('user')->get()->transform(fn($e) => $e->user->username);
        // $pengu = Pengumuman::find(1);
        // $userr = $pengu->user->username;

        // return var_dump($userr);

        // $daata = response()->json($data);
        return response()->json([
            'data' => $pengumuman->all(),
            'user' => $userr
        ], 200);

        
    }

    public function getUsername(){
        $username = User::all();    
        return response()->json([
            'data' => $username,
        ], 200);
    }
}
