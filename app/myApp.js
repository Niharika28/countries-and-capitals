angular.module('myApp', ['myService', 'ngRoute', 'ngAnimate'])
    .config([
        '$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when("/", {
                    templateUrl: "/home.html",
                    controller: 'homeCtrl'
                })
                .when("/countries", {
                    templateUrl: "/countries.html",
                    controller: "countriesCtrl"
                })
                .when("/countries/:countryCode", {
                    templateUrl: "/capital.html",
                    controller: 'capitalCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);