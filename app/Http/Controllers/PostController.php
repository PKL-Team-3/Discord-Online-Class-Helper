<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;

class PostController extends Controller
{
    public function create(Request $request, Post $post, User $user){
        $result = $request->validate([
            'title' => 'required',
            'category' => 'required',
            'content' => 'required',

        ]);

        Auth()->user()->posts()->create($result);

        return var_dump($result);
        
        return response()->json([
            'success' => true,
            'id' => $user->id,
            'username' => $user->username,
        ], 201);
    }
    
    public function get(Post $post, Request $request, User $user){
        $datas = $post->all();
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
            'data' => $post->all(),
            'user' => $userr
        ], 200);

        
    }
    
    public function getSinglePost(Post $post, Request $request, User $user,$id){

        $onePosts= $post->where('id', $id)->get();
        
        return response()->json([
            'data' => $onePosts
        ]);
    }


}
