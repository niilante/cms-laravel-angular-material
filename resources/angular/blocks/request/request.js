(function ()
{
    'use strict';

    angular
        .module('blocks.request')
        .factory('request', request);

    request.$inject = ['$http', 'exception', 'shooter'];

    /* @ngInject */
    function request($http, exception, shooter)
    {
        var service = {
            get  : get,
            post : post,
        };

        return service;

        ////////////////

        function get(route, success, error, method, showDialog)
        {
            var errorFn = error ? error : defaulErrorFn;

            return $http.get(route)
                .then(success)
                .catch(errorFn);

            function defaulErrorFn(data)
            {
                return showError(data,method, showDialog);
            }
        }

        function post(route, params, success, error, method, showDialog)
        {
            var errorFn = error ? error : defaulErrorFn;
            var config = {};
            if (params.toString() == '[object FormData]') {
                config = {
                    transformRequest : angular.identity,
                    headers          : {'Content-Type' : undefined}
                };
            };

            return $http.post(route, params, config)
                .then(success)
                .catch(errorFn);

            function defaulErrorFn(data)
            {
                return showError(data,method, showDialog);
            }
        }

        /**
         * Show a Dialog with a Error message and an exception catcher message in the console
         * and return a json with the error code and the error message in case want to use.
         *
         * In case don't want to show the dialog just pass an third argument with false value.
         *
         * @param data
         * @param method
         * @param show
         * @returns {{status: (*|number|string), message: string}}
         */
        function showError(data, method, show)
        {
            var showDialog = show != null ? show : true;
            var message = 'Check your internet connection and try again!';
            exception.catcher('XHR Failed for ' + method)(data);
            /**
             * If the status is 422 is an validation error of laravel so we show just the first validation error.
             */
            if (data.status == 422)
            {
                message = data.data[0];
            }

            if(showDialog)
            {
                shooter.error(message);
            }

            return {
                status  : data.status,
                message : message
            };
        }
    }
})();