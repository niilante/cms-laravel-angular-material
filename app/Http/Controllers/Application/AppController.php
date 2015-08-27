<?php namespace App\Http\Controllers\Application;

use App\Http\Controllers\Controller;

class AppController extends Controller
{

    /**
     * Show the application views if the user is Logged in
     */
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['getView']]);
    }

    public function serveApp()
    {
        return $this->showView();
    }

    public function getView($name)
    {
        $view_path = $this->layout . '.' . $name;
        if(starts_with($name, 'auth'))
        {
            $view_path = $name;
        }

        if (view()->exists($view_path))
        {
            return view($view_path);
        }

        abort(404);
    }
}