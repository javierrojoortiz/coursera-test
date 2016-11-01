(function () {
'use strict';

angular.module('DIApp', [])

.controller('DIController', DIController);

function DIController($scope, $filer, $injector) {
  $scope.name = "Javier";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
};

function AnnonateMe(name, job, mas) {
  return "Mas...";
}

console.log(DIController.toString());

})();
