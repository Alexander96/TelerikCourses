﻿var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider){
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl : '/partials/home',
            controller: 'MainController'
        })

});

app.controller('MainController', function($scope){
    $scope.hello = 'Hi from angular';
});