<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**OVERRIDE FUNCION QUE DEVUELVE MENSAJE DE LOGIN CORRECTO
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        return response()->json(['name' => 'Abigail', 'state' => 'CA']);

        return response()->json([
            'message' => 'Login terrible de exitoso',
            'success' => 'wena choro',
            'user' => 'este es el user equisde',
        ],200);
    }

    /**OVERRIDE FUNCION QUE DEVUELVE MENSAJE DE LOGIN INCORRECTO
     * Get the failed login response instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function sendFailedLoginResponse(Request $request)
    {

        return null;

        return response()->json([
            'message' => 'The given data was invalid.',
            'error' => 'These credentials do not match our records.'
        ],200);
    }

}
