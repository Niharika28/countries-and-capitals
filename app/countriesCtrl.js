angular.module('myApp')
    .controller('countriesCtrl', [
        '$scope', 'countriesService',
        function($scope, countriesService) {
            countriesService.getCountryList()
                .then(function(result) {
                    $scope.countries = result.geonames;
                });
        }
    ]);