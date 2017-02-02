define([
    'angular'
], function(angular) {
    angular.module('dir.phoneFormat', []).directive('phoneFormat', function($browser) {
        return {
            require: 'ngModel',
            link: function($scope, $element, $attrs, ngModelCtrl) {

                var filter_tel = function(tel){
                    if (!tel) { return ''; }

                    var value = tel.toString().trim().replace(/^\+/, '');

                    if (value.match(/[^0-9]/)) {
                        return tel;
                    }

                    var country, city, number;

                    switch (value.length) {
                        case 1:
                        case 2:
                        case 3:
                            city = value;
                            break;

                        default:
                            city = value.slice(0, 3);
                            if (value.length > 6) {
                                number = value.slice(3, 6) + '-' + value.slice(6);
                            }
                            else {
                                number = value.slice(3);
                            }

                    }

                    if(number){
                        return ("(" + city + ") " + number).trim();
                    }
                    else{
                        return "(" + city;
                    }
                };
                var listener = function() {
                    var value = $element.val().replace(/[^0-9]/g, '');
                    $element.val(filter_tel(value));
                };
                ngModelCtrl.$parsers.push(function(viewValue) {
                    return viewValue.replace(/[^0-9]/g, '').slice(0,10);
                });

                $element.bind('change', listener);
                $element.bind('keydown', function(event) {
                    $browser.defer(listener);
                });

                $element.bind('paste cut', function() {
                    $browser.defer(listener);
                });
            }

        };
    });
});

