angular.module('myService', [])
    .factory('countriesService', [
        '$http', '$route', function($http, $route) {

            var baseUrl = "http://api.geonames.org";
            var userName = "niharika28";
            var currentCountryCode;
            return ({
                countriesList: countriesList,
                country: country,
                neighbourList: neighbourList,
                capitalDetails: capitalDetails,
            });

            function countriesList() {
                var url = baseUrl+"/countryInfoJSON?username="+userName;
                var request = $http.get(url, { cache: true });
                return (request.then(success, error));
            };
            function country(countryCode) {
                var url = baseUrl+"/countryInfoJSON?username="+userName+"&country=" +countryCode;
                var request = $http.get(url);
                return (request.then(success, error));
            };

            function neighbourList(countryCode) {
                var url = baseUrl+"/neighboursJSON?username="+userName+"&country=" +countryCode;
                var request = $http.get(url);
                return (request.then(success, error));
            };

            function capitalDetails(countryCode) {
                var url = baseUrl+"/searchJSON?formatted=true&username="+userName+"&q=capital&&style=full&country=" +countryCode;
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