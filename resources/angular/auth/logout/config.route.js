(function ()
{
    'use strict';

    angular
        .module('auth.logout')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper)
    {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes()
    {
        return [
            {
                url    : '/auth/logout',
                config : {
                    resolve : {
                        logout : logout
                    }
                }
            }
        ];
    }
    /* @ngInject */
    function logout(dataservice, $window)
    {
        dataservice.logout().then(function ()
        {
            $window.location.reload();
        });
    }

})();