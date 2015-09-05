(function ()
{
    'use strict';

    angular.module('app.core', [
        /*
         * Angular Modules
         */
        'ngMaterial','ngAnimate', 'ngRoute', 'ngSanitize',
        /*
         * App Core Modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router', 'blocks.shooter', 'blocks.request'
    ]);

})();