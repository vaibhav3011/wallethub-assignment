define([
    'angular',
    'angularUiRoute',
    'angularSanitize',
    'angularAnimate',
    'partial/home/home',
    'directive/directive'
], function(angular) {
    // Declare app level module which depends on views, and components
    return angular.module('wallethub', [
        'ui.router', 
        'ngSanitize', 
        'ngAnimate',
        'wallethub.ctrl', 
        'wallethub.directive'
    ]).
    config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');

        $stateProvider.state('home', {
            url: '/home/:pageParam/:optionalParam',
            params: { optionalParam: { value: null, squash: true } },
            templateUrl: function($stateParams) {
                if ($stateParams.pageParam <= 3) {
                    return 'partial/home/home' + $stateParams.pageParam + '/home.html';
                }
                return 'partial/home/home1/home.html';
            }
        });
        /* Add New States Above */
        $urlRouterProvider.otherwise('/home/1');
    }]);
});
