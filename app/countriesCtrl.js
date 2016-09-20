angular.module('myApp')
    .controller('countriesCtrl', ['countriesService',
        function(countriesService) {
        	var vm = this;
            countriesService.countriesList()
                .then(function(result) {
                    vm.countries = result.geonames;
                });
        }
    ]);