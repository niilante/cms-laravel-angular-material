(function() {
    'use strict';

    angular
        .module('auth.register')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/auth/register',
                config: {
                    controller: 'Register',
                    controllerAs: 'vm',
                    templateUrl: '/view/auth.register',
                    title: 'Create Account'
                }
            }
        ];
    }

})();