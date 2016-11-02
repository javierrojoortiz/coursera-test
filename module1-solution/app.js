(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];

function LunchCheckController($scope,$filter) {

  $scope.checkOk = function () {
    var arrayItems = getItemsFromText($scope.num_items);
    $scope.status = getMessageForItems(arrayItems);
  };

}

function getItemsFromText (string) {

  if(string == undefined){
    return "";
  }else{
    var arrItems = string.split(",");
    return arrItems;
  }

}

function getMessageForItems(arrItems) {

  if (arrItems.length == 0 || arrItems == "") {
    return "Please, enter data first";
  } else if (arrItems.length <= 3) {
    return "Enjoy!"
  } else {
    return "Too much!";
  }

}

})();
