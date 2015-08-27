(function ()
{
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $window, $q, exception, logger)
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
            return $http.post('/auth/login', user)
                .then(signInComplete)
                .catch(function (data)
                {
                    exception.catcher('XHR Failed for loginUser')(data);
                    return {
                        status  : data.status,
                        message : 'Check your internet connection and try again!'
                    };
                });

            function signInComplete(data) { return data.data; }
        }

        function registerUser(user)
        {
            return $http.post('/auth/register', user)
                .then(registerUserComplete)
                .catch(function (data)
                {
                    var message = 'Check your internet connection and try again!';
                    exception.catcher('XHR Failed for registerUser')(data);
                    if (data.status == 422)
                    {
                        message = data.data[0];
                    }
                    return {
                        status  : data.status,
                        message : message
                    };
                });

            function registerUserComplete(data) { return data.data; }
        }

        function logout()
        {
            return $http.get('/auth/logout')
                .then(logoutComplete)
                .catch(function (data)
                {
                    return data;
                });

            function logoutComplete(data) { return data.data; }
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