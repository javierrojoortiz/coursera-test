(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', DIController);

DIController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.name = "Javier";
  $scope.stateOfBeing = "hambriento";

  $scope.sayMessage = function () {
    return "Javier es el puto amo";
  };

  $scope.feedJavier = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
