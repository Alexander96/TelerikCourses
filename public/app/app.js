var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider){
    //$locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl : '/partials/main/home',
            controller: 'MainController'
        })

});