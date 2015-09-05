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
            custom  : custom,
            image   : image
        };

        return service;

        ////////////////

        /**
         * Show a Dialog with a Success message
         *
         * @param message
         * @param title
         */
        function success(message, title)
        {
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.body))
                    .title(title ? title : "Success!")
                    .content(message)
                    .ariaLabel(title)
                    .ok('ok!'));
        }

        /**
         * Show a Dialog with an Error message and theme
         *
         * @param message
         * @param title
         */
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

        /**
         * Show a Confirm Dialog with customs callback for each answers if is necessary.
         *
         * @param title
         * @param message
         * @param ok
         * @param cancel
         */
        function confirm(title, message, ok, cancel)
        {
            $mdDialog.show(
                $mdDialog.confirm()
                    .title(title)
                    .content(message)
                    .ariaLabel(title)
                    .ok('Yes')
                    .cancel('No'))
                .then(ok, cancel);
        }

        /**
         * Show a Custom Dialog with customs callback for each answers if necessary.
         *
         * @param controller
         * @param templateUrl
         * @param locals
         * @param ok
         * @param cancel
         */
        function custom(controller, templateUrl, locals, ok, cancel)
        {
            $mdDialog.show({
                controller          : controller,
                templateUrl         : templateUrl,
                parent              : angular.element(document.body),
                locals              : locals ? locals : {},
                clickOutsideToClose : true
            }).then(ok, cancel);
        }

        /**
         * Show a Dialog with an Image.
         *
         * @param imageUrl
         */
        function image(imageUrl)
        {
            $mdDialog.show({
                clickOutsideToClose : true,
                parent              : angular.element(document.body),
                template            : '<md-dialog aria-label="List dialog">' +
                '  <md-dialog-content style="padding: 0;line-height: 0;">' +
                '  <img class="img-responsive" ng-src="' + imageUrl + '" >' +
                '  </md-dialog-content>' +
                '</md-dialog>'
            });
        }
    }
})();