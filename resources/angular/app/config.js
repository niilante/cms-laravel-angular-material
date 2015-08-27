(function ()
{
    'use strict';

    var logger = angular.module('app');

    logger.config(configure);

    configure.$inject = ['$mdThemingProvider', '$interpolateProvider'];

    /* @ngInject */
    function configure($mdThemingProvider, $interpolateProvider)
    {

        $interpolateProvider.startSymbol('{%');
        $interpolateProvider.endSymbol('%}');

        $mdThemingProvider.theme('success')
            .primaryPalette('blue');

        $mdThemingProvider.theme('info')
            .primaryPalette('teal');

        $mdThemingProvider.theme('error')
            .primaryPalette('red');

        $mdThemingProvider.theme('warning')
            .primaryPalette('red', {
                default : '800'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('light-blue');

        $mdThemingProvider.theme('sideNav')
            .backgroundPalette('blue-grey', {
                default : '900'
            })
            .dark();
    }

})();