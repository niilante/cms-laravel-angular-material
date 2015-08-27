(function() {
    'use strict';

    angular
        .module('auth')
        .controller('Auth', Auth);

    /* @ngInject */
    function Auth()
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;

        activate();

        ////////////////

        function activate() {
        }


    }

})();