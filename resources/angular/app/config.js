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
            .primaryPalette('teal');

        $mdThemingProvider.theme('error')
            .primaryPalette('grey', {
                default: '100'
            })
            .backgroundPalette('red', {
                default : '700'
            })
            .dark();

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