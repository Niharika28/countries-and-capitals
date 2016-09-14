angular.module('myApp')
    .controller('capitalCtrl', [
        '$scope', 'countriesService',
        function($scope, countriesService) {
            countriesService.getCountry().then(function(result) {
                $scope.country = result.geonames[0];
                console.log($scope.country);
            });
            countriesService.getNeighbourList().then(function(result) {
                $scope.neighbours = result.geonames;
            });
            countriesService.getCapitalDetails().then(function(result) {
                $scope.capitalPopulation = result.geonames[0].population;
            });
        }
    ]);