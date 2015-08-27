(function ()
{
    'use strict';

    angular
        .module('auth.login')
        .controller('Login', Login);

    /* @ngInject */
    function Login(dataservice, logger, shooter, $window)
    {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.user = {};
        vm.loginUser = loginUser;

        activate();

        ////////////////

        function activate()
        {
            logger.success('Login Ready!');
        }

        function loginUser()
        {
            vm.submitting = true;
            return dataservice.loginUser(vm.user).then(function (data)
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