(function ()
{
    'use strict';

    angular
        .module('auth.register')
        .controller('Register', Register);


    /* @ngInject */
    function Register(dataservice, logger, shooter, $window, $timeout)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.user = {};
        vm.registerUser = registerUser;

        activate();

        ////////////////

        function activate() {
            logger.success('Register Ready!');
        }

        function registerUser()
        {
            vm.submitting = true;
            return dataservice.registerUser(vm.user).then(function ()
            {
                vm.submitting = false;
            });
        }
    }
})();