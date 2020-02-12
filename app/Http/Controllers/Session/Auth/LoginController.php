<?php

namespace App\Http\Controllers\Session\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

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
    //protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function sessionStatus(Request $request){
        if(Auth::check()){
            return response()->json([
                'success' => [
                    'status' => 200,
                    'message' => "Your Are Logged in the application.",
                    'data' => [
                        'user'=> Auth::user()->email,
                    ]
                ]
            ], 200);
        }else{
            return response()->json([
                'error' => [
                    'status' => 200,
                    'message' => "Your Are not Logged in the application.",
                    'data' => null,
                ]
            ], 200);
        }

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
        return response()->json([
            'success' => [
                'status' => 200,
                'message' => "Your Login Was Successful.",
                'data' => [
                    'user' => $user->email,
                ]
            ]
        ], 200);
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
        return response()->json([
            'error' => [
                'status' => 400,
                'message' => "Email or password is wrong.",
                'data' => null
            ]
        ], 400);
    }

    /**OVERRIDE FUNCION QUE DEVUELVE MENSAJE DE LOGOUT CORRECTO
     * The user has logged out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    protected function loggedOut(Request $request)
    {
        return response()->json([
            'success' => [
                'status' => 200,
                'message' => "Your Logout Was Successful.",
                'data' => null
            ]
        ], 200);
    }

}
