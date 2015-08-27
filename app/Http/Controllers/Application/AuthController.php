<?php namespace App\Http\Controllers\Application;

use App\Http\Controllers\Controller;

class AuthController extends Controller
{

    /**
     * Define the layout for this controller
     *
     * @var string
     */
    protected $layout = 'auth';

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