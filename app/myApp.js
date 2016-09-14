angular.module('myApp', ['myService', 'ngRoute'])
    .config([
        '$locationProvider', '$routeProvider', function($routeProvider) {
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