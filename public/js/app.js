'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: 'partial/home'});
    $routeProvider.when('/company', {templateUrl: 'partial/company'});
    $routeProvider.when('/contactus', {templateUrl: 'partial/contactus'});
    $routeProvider.when('/investors', {templateUrl: 'partial/investors'});
    $routeProvider.when('/careers', {templateUrl: 'partial/careers'});
    $routeProvider.when('/analytics', {templateUrl: 'partial/analytics'});
    $routeProvider.when('/targeting', {templateUrl: 'partial/targeting'});
    $routeProvider.when('/measurement', {templateUrl: 'partial/measurement'});
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
}]);