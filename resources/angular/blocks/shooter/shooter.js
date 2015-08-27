(function ()
{
    'use strict';

    angular
        .module('blocks.shooter')
        .factory('shooter', shooter);

    shooter.$inject = ['$mdDialog'];

    /* @ngInject */
    function shooter($mdDialog)
    {
        var service = {
            success : success,
            error   : error,
            confirm : confirm,
            update  : update
        };

        return service;

        ////////////////

        function success(title, message)
        {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title(title)
                    .content(message)
                    .ariaLabel(title)
                    .ok('ok!'));
        }

        function error(message, title)
        {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title(title ? title : 'An error was occurred!')
                    .content(message)
                    .ariaLabel(title)
                    .ok('ok!')
                    .theme('error'));
        }

        function confirm(ev, title, message, ok)
        {
            $mdDialog.show(
                $mdDialog.confirm()
                    .title(title)
                    .content(message)
                    .ariaLabel(title)
                    .ok('Yes')
                    .cancel('No')
                    .targetEvent(ev))
                .then(ok);
        }

        function update(ev, controller, templateUrl, local, ok, cancel)
        {
            $mdDialog.show({
                controller          : controller,
                templateUrl         : templateUrl,
                parent              : angular.element(document.body),
                targetEvent         : ev,
                locals              : {
                    item : local
                },
                clickOutsideToClose : true
            }).then(ok, cancel);
        }
    }
})();