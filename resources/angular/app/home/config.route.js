(function() {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    controller: 'Home',
                    controllerAs: 'vm',
                    templateUrl: '/view/home',
                    title: 'Home'
                }
            }
        ];
    }

})();