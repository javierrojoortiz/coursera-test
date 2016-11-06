(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.items = ShoppingListCheckOffService.getToBuyList();

  listToBuy.isEmpty = function() {
    return listToBuy.items.length == 0;
  }

  listToBuy.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);

  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var listBought = this;

  listBought.items = ShoppingListCheckOffService.getBoughtList();

  listBought.isEmpty = function () {
    return listBought.items.length == 0;
  }

}

function ShoppingListCheckOffService() {
  var service = this;

  var alreadyBought = [];
  var listOfItems = [
    {
      name: 'Ice Tea',
      quantity: '5'
    },
    {
      name: 'Chocolate',
      quantity: '2'
    },
    {
      name: 'Coca-Cola',
      quantity: '6'
    },
    {
      name: 'Corona',
      quantity: '6'
    },
    {
      name: 'Pineapple',
      quantity: '1'
    },
  ];

  service.getToBuyList = function() {
    return listOfItems;
  }

  service.getBoughtList = function() {
    return alreadyBought;
  }

  service.buyItem = function (index) {

    alreadyBought.push(listOfItems.splice(index,1)[0]);

  }

}


})();
