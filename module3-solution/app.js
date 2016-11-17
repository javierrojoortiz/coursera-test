(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService )
.directive('foundItems', FoundItemsDirective )
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http , ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];
    var items = [];

    if(searchTerm == ''){
      return foundItems;
    }

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      items = result.data.menu_items;
      for (var i = 0; i < items.length; i++) {
        var description = items[i].description;
        if (description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(items[i]);

        }
      }
      return foundItems;
      }).catch(function (error) {
        console.log("error getting all data");
      });

  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.getMenuList = function() {
    list.found = [];

    MenuSearchService.getMatchedMenuItems(list.searchTerm).then(function (searchComplete) {
      list.found = searchComplete;
      if (list.found.length == 0) {
        list.message = 'Nothing found';
      }else{
        list.message = null;
      }
    });
  }

  list.removeItem = function(index){
    list.found.splice(index,1);
  }
}

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };
  return ddo;
}


})();
