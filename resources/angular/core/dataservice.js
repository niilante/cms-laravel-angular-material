(function ()
{
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($window, $q, exception, logger, request)
    {
        var isPrimed = false,
            primePromise;

        var service = {
            loginUser    : loginUser,
            registerUser : registerUser,
            logout       : logout,
            ready        : ready
        };

        return service;

        ////////////////

        function loginUser(user)
        {
            return request.post('/auth/login', user, signInComplete, null, 'loginUser');

            function signInComplete() { $window.location.reload(); }
        }

        function registerUser(user)
        {
            return request.post('/auth/register', user,registerUserComplete, null, 'registerUser');

            function registerUserComplete() { $window.location.reload(); }
        }

        function logout()
        {
            return request.get('/auth/logout', logoutComplete, null, 'logout');

            function logoutComplete() { $window.location.reload(); }
        }

        function prime()
        {
            // This function can only be called once.
            if (primePromise)
            {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success()
            {
                isPrimed = true;
                logger.info('Primed data', null);
            }
        }

        /* @ngInject */
        function ready(nextPromises)
        {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function ()
                {
                    return $q.all(nextPromises);
                })
                .catch(exception.catcher('"ready" function failed'));
        }

    }

})();