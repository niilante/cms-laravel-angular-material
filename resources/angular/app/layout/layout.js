(function ()
{
    'use strict';

    angular
        .module('app.layout')
        .controller('Layout', Layout);

    /* @ngInject */
    function Layout(logger, $mdSidenav, $location)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.navigate = navigate;
        vm.sideNavToggle = sideNavToggle;

        activate();

        ////////////////

        function activate()
        {
            logger.success('App layout Ready!');
        }

        function sideNavToggle(sidenav)
        {
            $mdSidenav(sidenav).toggle();
        }

        function navigate(url, sidenav)
        {
            $location.url(url);
            if ($mdSidenav(sidenav).isOpen() && !$mdSidenav(sidenav).isLockedOpen())
            {
                $mdSidenav(sidenav).toggle();
            }
        }

    }

})();