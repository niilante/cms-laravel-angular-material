(function ()
{
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appErrorPrefix : '[App Error] ', //Configure the exceptionHandler decorator
        appTitle       : 'RAAP Control Panel',
        version        : '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$locationProvider', '$logProvider', '$routeProvider','$httpProvider', 'routehelperConfigProvider', 'exceptionHandlerProvider', 'CSRF_TOKEN'];

    /* @ngInject */
    function configure($locationProvider, $logProvider, $routeProvider, $httpProvider, routehelperConfigProvider, exceptionHandlerProvider, CSRF_TOKEN)
    {
        $locationProvider.html5Mode(true);
        $httpProvider.defaults.headers.common['CSRF_TOKEN'] = CSRF_TOKEN;

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled)
        {
            $logProvider.debugEnabled(true);
        }

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        var resolveAlways                               = {
            ready : appReady
            // ready: ['dataservice', function (dataservice) {
            //    return dataservice.ready();
            // }]
        };
        appReady.$inject = ['dataservice'];
        /* @ngInject */
        function appReady (dataservice)
        {
            return dataservice.ready();
        }
        routehelperConfigProvider.config.resolveAlways  = resolveAlways;

        // Configure the common exception handler
        exceptionHandlerProvider.configure(config.appErrorPrefix);
    }

})();