(function ()
{
    'use strict';

    angular
        .module('app.home')
        .controller('Home', Home);

    /* @ngInject */
    function Home(logger)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
            logger.success('Home is Ready!');
        }
    }
})();