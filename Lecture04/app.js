(function () {
  'use strict';

  angular.module('myFirstApp', [])

  .controller('MyFirstController',function ($scope) {
    $scope.name ="Javier"
    $scope.sayHello = function () {
      return "Hello world"
    }

  });

})();
