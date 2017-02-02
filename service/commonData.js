define([
    'angular'
], function(angular, service) {

    angular.module('wallethub.service',[]).factory('commonData',function() {

        var userName = 'Default User';
        var commonData = {

            setName : function(name){
                userName = name;
            },
            getName : function(){
                return userName;
            }
        };

        return commonData;
    });
});
