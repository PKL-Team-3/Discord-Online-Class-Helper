<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Carbon\Carbon;


class AuthController extends Controller
{
    public function sync(Request $request, User $user){
        $result = $request->validate([
            'role' => 'required',
        ]);

        $user->fill($result);
        $user->update();

        return response()->json([
            'success' => true,
            'username' => $user->username,
            'role' => $user->role
        ], 200);
    }

    public function register(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'username' => 'required|string',
            'password' => 'required|string|confirmed',
        ]);

        $user = new User([
            'id' => $request->id,
            'username' => $request->username,
            'password' => bcrypt($request->password),
        ]);

        $user->save();

        return response()->json([
            'success' => true,
            'id' => $user->id,
            'username' => $user->username,
        ], 201);
    }


    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string|',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['username', 'password']);

        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized Access, please confirm credentials or verify your email'
            ], 401);

        $user = $request->user();

        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'success' => true,
            'id' => $user->id,
            'role' => $user->role,
            'username' => $user->username,
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ], 201);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
  

}
