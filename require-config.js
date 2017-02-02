/**
 * Created by gozoomo on 9/8/16.
 */
require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        angularUiRoute: 'bower_components/angular-ui-router/release/angular-ui-router',
        angularSanitize : 'bower_components/angular-sanitize/angular-sanitize',
        angularAnimate : 'bower_components/angular-animate/angular-animate'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularUiRoute': ['angular'],
        'angularSanitize' : ['angular'],
        'angularAnimate' : ['angular']
    },
    priority: [
        "angular"
    ]
});

require([
        'angular',
        'app'
    ], function(angular, app) {
        angular.element().ready(function() {
            // bootstrap the app manually
            angular.bootstrap(document, ['wallethub']);
        });
    }
);
