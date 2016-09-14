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
                return (request.then(handleSuccess, handleError));
            };
            function getCountry() {
                var url = "http://api.geonames.org/countryInfoJSON?username=niharika28&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(handleSuccess, handleError));
            };

            function getNeighbourList() {
                var url = "http://api.geonames.org/neighboursJSON?username=niharika28&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(handleSuccess, handleError));
            };

            function getCapitalDetails() {
                var url = "http://api.geonames.org/searchJSON?formatted=true&username=niharika28&q=capital&&style=full&country=" + $route.current.params.countryCode;
                var request = $http.get(url);
                return (request.then(handleSuccess, handleError));
            };

            function handleError(response) {

                  if (!angular.isObject(response.data) ||
                    !response.data.message) {
                    throw("An unknown error occurred.");
                }

                // Otherwise, use expected error message.
                throw(response.data.message);
            }

            // Transform the successful response, unwrapping the application data
            // from the API response payload.
            function handleSuccess(response) {
                return (response.data);
            }
        }
    ]);