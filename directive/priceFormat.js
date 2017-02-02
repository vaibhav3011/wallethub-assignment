define([
    'angular'
], function(angular) {
    angular.module('dir.priceFormat', []).directive('priceFormat', function($timeout, $filter) {
        return {
            require: 'ngModel',
            link: function($scope, $element, $attrs, ngModelCtrl) {

                var listener = function() {
                    var value = $element.val().replace(/[^0-9]/g, '');
                    if(value) {
                        $element.val('$' + $filter('number')(value));
                    }
                    else{
                        $element.val(value);
                    }
                };

                ngModelCtrl.$parsers.push(function(viewValue) {
                    return viewValue.replace(/[^0-9]/g, '');
                });

                $element.bind('change', listener);
                $element.bind('keydown', function(event) {
                    $timeout(listener, 0);
                });

                $element.bind('paste cut', function() {
                    $timeout(listener, 0);
                });
            }

        };
    });
});


