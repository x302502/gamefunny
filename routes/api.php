<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Users
Route::get('users', 'UserController@index');
Route::get('users/{id}', 'UserController@show');
Route::post('users', 'UserController@store');
Route::put('users/{id}', 'UserController@update');
Route::delete('users/{id}', 'UserController@delete');


Route::get('artist', 'ArtistController@index');
Route::get('artist/{id}', 'ArtistController@show');
Route::post('artist', 'ArtistController@store');
Route::put('artist/{id}', 'ArtistController@update');
Route::delete('artist/{id}', 'ArtistController@delete');

Route::get('person', 'PersonController@index');
