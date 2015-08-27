<?php namespace App\Console\Commands;

use File;
use Illuminate\Console\Command;

class AngularView extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ng:view {name} {--path=app}';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new laravel blade view with his module, controller and route config for angular.';

    /**
     * Create a new command instance.
     *
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $name = $this->argument('name');
        $path = $this->option('path');
        $dir_name = explode('_', $name);
        $file_name = isset($dir_name[1]) ? $dir_name[1] : $dir_name[0];
        $controller_name = studly_case($name);
        $module_name = strtolower(str_replace('_', '.', $name));
        $view_name = ucfirst(str_replace('_', ' ', $name));

        $view = file_get_contents(__DIR__ . '/Templates/angular_view.html.stub');
        $module = file_get_contents(__DIR__ . '/Templates/angular_module.js.stub');
        $controller = file_get_contents(__DIR__ . '/Templates/angular_controller.js.stub');
        $route = file_get_contents(__DIR__ . '/Templates/angular_route.js.stub');

        $view = str_replace('{{ViewName}}', $view_name, $view);

        $module = str_replace('{{ModuleName}}', $module_name, $module);

        $controller = str_replace('{{ModuleName}}', $module_name, $controller);
        $controller = str_replace('{{ControllerName}}', $controller_name, $controller);

        $route = str_replace('{{ModuleName}}', $module_name, $route);
        $route = str_replace('{{ControllerName}}', $controller_name, $route);

        $view_folder = base_path('resources/views/' . $path . '/') . $dir_name[0];
        $angular_folder = base_path('resources/angular/' . $path . '/') . $dir_name[0];
        if(isset($dir_name[1]))
        {
            $angular_folder .= '/' . $dir_name[1];
        }

        if ( ! is_dir($angular_folder))
        {
            //create folder
            File::makeDirectory($angular_folder, 0775, true);
        }
        if ( ! is_dir($view_folder))
        {
            //create folder
            File::makeDirectory($view_folder, 0775, true);
        }
        //create view (.html)
        File::put($view_folder . '/' . $file_name . '.blade.php', $view);
        //create module (.js)
        File::put($angular_folder . '/' . $file_name . '.module.js', $module);
        //create controller (.js)
        File::put($angular_folder . '/' . $file_name . '.js', $controller);
        //create route (.js)
        File::put($angular_folder . '/config.route.js', $route);

        $this->info('View created successfully.');
    }
}