angular.module('myApp', ['myService', 'ngRoute'])
    .config([
        '$routeProvider', function($routeProvider) {
             $routeProvider
                .when("/", {
                    templateUrl: "/home.html",
                    controller: 'homeCtrl',
                    controllerAs: 'vm'
                })
                .when("/countries", {
                    templateUrl: "/countries.html",
                    controller: "countriesCtrl",
                    controllerAs: 'vm'
                })
                .when("/countries/:countryCode", {
                    templateUrl: "/capital.html",
                    controller: 'capitalCtrl',
                    controllerAs: 'vm',
                    resolve : {
                        countryCode: function($route, $location) {
                            var countryCode = $route.current.params.countryCode;                           
                            return countryCode;
                             }
                        }
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);