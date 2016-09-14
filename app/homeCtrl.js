angular.module('myApp')
    .controller('homeCtrl', [
        '$scope',
        function($scope) {
            $scope.data = "world";
        }
    ]);
