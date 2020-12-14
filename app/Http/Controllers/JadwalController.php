<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Jadwal;



class JadwalController extends Controller
{
    public function get(Request $request, Jadwal $jadwal, User $user){
        $datas = $jadwal->with('user')->with('user.discord')->get();

        

        // $user = [];
        // foreach ($datas as $data) {
        //     $userr[] = $data->user->username;
        // }
        // $avatar = [];
        // foreach ($datas as $data) {
        //     $avatar[] = $data->user->discord->avatar_url;
        // }
        // $username = Pengumuman::with('user')->get()->transform(fn($e) => $e->user->username);
        // $pengu = Pengumuman::find(1);
        // $userr = $pengu->user->username;

        // return var_dump($userr);

        // $daata = response()->json($data);
        return response()->json([
            'data' => $datas
            // 'user' => $userr,
            // 'avatar' => $avatar
        ], 200);
    }

    public function getWeb(Request $request, Jadwal $jadwal, User $user){
        $datas = $jadwal->all();



        $user = [];
        foreach ($datas as $data) {
            $userr[] = $data->user->username;
        }
        $avatar = [];
        foreach ($datas as $data) {
            $avatar[] = $data->user->discord->avatar_url;
        }
        // $username = Pengumuman::with('user')->get()->transform(fn($e) => $e->user->username);
        // $pengu = Pengumuman::find(1);
        // $userr = $pengu->user->username;

        // return var_dump($userr);

        // $daata = response()->json($data);
        return response()->json([
            'data' => $jadwal->all(),
            'user' => $userr,
            'avatar' => $avatar
        ], 200);
    }

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
