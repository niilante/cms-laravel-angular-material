(function() {
    'use strict';
    var _token = $('meta[name="_token"]').attr('content');
    angular
        .module('app.core')
        .constant('CSRF_TOKEN', _token);
})();