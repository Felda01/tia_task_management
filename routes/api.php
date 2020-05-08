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
    Route::get('projects/{project}/roadmap', 'API\ProjectController@roadmap')->name('projects.show.roadmap');
    Route::get('projects/{project}/board', 'API\ProjectController@board')->name('projects.show.board');
    Route::get('projects/{project}/gantt', 'API\ProjectController@gantt')->name('projects.show.gantt');
    Route::put('projects/{project}/assign-user', 'API\ProjectController@assignUser')->name('projects.assignUser');

    Route::apiResource('versions', 'API\VersionController', ['except' => ['destroy', 'index', 'show']]);

    Route::apiResource('tasks', 'API\TaskController', ['except' => ['destroy']]);
    Route::put('tasks/{task}/store-dependency', 'API\TaskController@storeDependency')->name('tasks.storeDependency');
    Route::put('tasks/{task}/destroy-dependency', 'API\TaskController@destroyDependency')->name('tasks.destroyDependency');

    Route::apiResource('comments', 'API\CommentController', ['only' => ['store']]);

    Route::apiResource('time-tracking', 'API\TimeTrackingController', ['except' => ['update', 'index', 'show']]);

    Route::apiResource('users', 'API\UserController');
    Route::put('users/{user}/position', 'API\UserController@updatePosition')->name('users.position');
});


