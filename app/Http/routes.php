<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'Application\AppController@serveApp');

// Return a blade view
Route::get('view/{name}', 'Application\AppController@getView');

// Authentication routes...
Route::get('auth/sign-in', 'Auth\AuthController@getSignIn');
Route::post('auth/sign-in', 'Auth\AuthController@postSignIn');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');