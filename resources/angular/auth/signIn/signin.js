(function ()
{
    'use strict';

    angular
        .module('auth.signIn')
        .controller('SignIn', SignIn);

    /* @ngInject */
    function SignIn(dataservice, logger, shooter, $window)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.user = {};
        vm.signInUser = signInUser;

        activate();

        ////////////////

        function activate()
        {
            logger.success('Sign in Ready!');
        }

        function signInUser()
        {
            vm.submitting = true;
            return dataservice.signInUser(vm.user).then(function (data)
            {
                vm.submitting = false;
                logger.info('data', data);
                if (data.status != 200)
                {
                    shooter.error(data.message);
                }
                else
                {
                    shooter.success('Congratulations!', data.message);
                    $window.location.reload();
                }
            });
        }
    }
})();