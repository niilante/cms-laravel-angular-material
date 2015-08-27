<?php namespace App\Http\Controllers\Application;

use App\Http\Controllers\Controller;

class AuthController extends Controller
{

    /**
     * Show the application views if the user isn't Logged in
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function serveApp()
    {
        return $this->showView();
    }
}