(function() {
    'use strict';

    angular
        .module('auth.signIn')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/auth/sign-in',
                config: {
                    controller: 'SignIn',
                    controllerAs: 'vm',
                    templateUrl: '/view/auth.signIn',
                    title: 'Sign In'
                }
            }
        ];
    }

})();