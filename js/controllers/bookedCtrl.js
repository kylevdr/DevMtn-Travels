angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {
    $scope.id = Number($stateParams.id);
    $scope.travelInfo = mainSrv.travelInfo;
    for (var i = 0; i < $scope.travelInfo.length; i++) {
        if ($scope.travelInfo[i].id === $scope.id) {
            $scope.place = $scope.travelInfo[i];
        }
    }
    $scope.styleObj = {
        background: 'url("' + $scope.place.image + '")',
        'background-size': 'cover'
    }
});