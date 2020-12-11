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

    public function get(Request $request, Materi $materi, User $user){
        $datas = $materi->all();
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
            'data' => $datas,
            'user' => $userr
        ], 200);
    }
}
