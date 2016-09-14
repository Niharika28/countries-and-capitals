angular.module('myService', [])
    .factory('countriesService', [
        '$http', '$route', function($http, $route) {

            return ({
                getCountryList: getCountryList,
                getCountry: getCountry,
                getNeighbourList: getNeighbourList,
                getCapitalDetails: getCapitalDetails
            });

            function getCountryList() {
                var url = "http://api.geonames.org/countryInfoJSON?username=niharika28";
                var request = $http.get(url, { cache: true });
                return (request.then(success, error));
            };
            function getCountry() {
                var url = "http://api.geonames.org/countryInfoJSON?username=niharika28&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(success, error));
            };

            function getNeighbourList() {
                var url = "http://api.geonames.org/neighboursJSON?username=niharika28&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(success, error));
            };

            function getCapitalDetails() {
                var url = "http://api.geonames.org/searchJSON?formatted=true&username=niharika28&q=capital&&style=full&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(success, error));
            };

            function error(response) {
                throw(response.data.message);
            }

            function success(response) {
                return (response.data);
            }
        }
    ]);