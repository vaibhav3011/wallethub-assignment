/**
 * Created by gozoomo on 9/8/16.
 */
define([
    'angular',
    'directive/focus',
    'directive/phoneFormat',
    'directive/priceFormat'
], function(angular) {
    angular.module('wallethub.directive', ['dir.focus','dir.phoneFormat', 'dir.priceFormat']);
});
