angular.module('myApp')
    .controller('capitalCtrl', ['countriesService','countryCode',
        function(countriesService,countryCode) {
            var vm = this;
            vm.countryCode = countryCode;

            countriesService.country(vm.countryCode).then(function(result) {
                vm.country = result.geonames[0];
                console.log(vm.country.countryName);
                console.log(vm.country.population);
            },function(error){
                alert(error);
            });

            countriesService.neighbourList(vm.countryCode).then(function(result) {
                vm.neighbours = result.geonames;
            });
            
            countriesService.capitalDetails(vm.countryCode).then(function(result) {
                vm.capitalPopulation = result.geonames[0].population;
            });
        }
    ]);