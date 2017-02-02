define([
    'angular'
], function(angular) {
    angular.module('dir.focus', []).directive('focus', function($timeout) {
        return {
            restrict: 'A',
            link: function($scope,elem,attrs) {

                var map = {
                    'input-1' : {
                        next : 'input-2'
                    },
                    'input-2' : {
                        prev : 'input-1',
                        next : 'input-3'
                    },
                    'input-3' : {
                        prev : 'input-2'
                    }
                };

                var id = attrs.id;
                var listener = function(e){
                    e.preventDefault();
                    var value  = elem.val();
                    if(value.length > 5){
                        elem.val(value.slice(0,5));
                        var next = document.getElementById(map[id].next);
                        if(next){
                            next.value = value.slice(5);
                            next.focus();
                        }
                    }
                    if(value.length === 0 ){
                        var prev = document.getElementById(map[id].prev);
                        if(prev){
                            prev.focus();
                        }
                    }
                };
                elem.bind('keydown', function(e) {
                    $timeout(function(){listener(e);}, 0);
                });
            }
        };
    });
});
