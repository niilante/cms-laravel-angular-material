(function() {
    'use strict';

    angular
        .module('auth.login')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/auth/login',
                config: {
                    controller: 'Login',
                    controllerAs: 'vm',
                    templateUrl: '/view/auth.login',
                    title: 'Login'
                }
            }
        ];
    }

})();