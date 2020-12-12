<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PengumumanController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\MateriController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/demo-url',  function  (Request $request)  {
    return response()->json(['Laravel 7 CORS Demo']);
 });
 Route::group([
    'middleware' => 'auth:api'
  ], function() {
    Route::post('pengumuman/create',[PengumumanController::class, 'create']);
    Route::get('pengumuman/get', [PengumumanController::class, 'get']);
    Route::get('pengumuman/getUsername', [PengumumanController::class, 'getUsername']);
    Route::post('post/create', [PostController::class, 'create']);
    Route::get('post/get', [PostController::class, 'get']);
    Route::get('post/get/{id}', [PostController::class, 'getSinglePost']);
    Route::post('materi/create', [MateriController::class, 'create']);
    Route::get('materi/get', [MateriController::class, 'get']);
    Route::get('pengumuman/test', [PengumumanController::class, 'test']);
  });


Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'register']);
    Route::put('sync/{user}', [AuthController::class, 'sync']);
  
    Route::group([
      'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);

    });
});