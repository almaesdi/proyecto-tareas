<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Auth;

Route::get('/prueba',function(){
    return "Hola";
});

Route::get('/sessionStatus', function() {
    return ['user' => Auth::user() ? Auth::user()->load('profile') : null];
});

Route::get('/', function () {
    return view('index');
});

//Auth::routes();




/////////////////////////////////////SESSION/////////////////////////////////////
// Authentication Routes...
//Route::get('loginform', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Session\Auth\LoginController@login');
Route::post('logout', 'Session\Auth\LoginController@logout')->name('logout');

// Registration Routes...
//Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('{any}', function(){
    return view('index');
})->where('any','.*');
