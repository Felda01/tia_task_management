<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('guest')->group(function () {
    Route::post('register', 'AuthController@register')->name('register');
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('refresh-token', 'AuthController@refreshToken')->name('refreshToken');
});

Route::middleware('auth:api')->group(function () {
    Route::post('logout', 'AuthController@logout')->name('logout');

    Route::get('user', 'API\UserController@current')->name('user');

    Route::apiResource('clients', 'API\ClientController', ['except' => ['destroy']]);
    Route::apiResource('projects', 'API\ProjectController', ['except' => ['destroy', 'index']]);
    Route::apiResource('versions', 'API\VersionController', ['except' => ['destroy', 'index', 'show']]);
    //Route::apiResource('tasks', 'API\TaskController', ['except' => ['destroy', 'index', 'show']]);
});


