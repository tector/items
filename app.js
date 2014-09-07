(function() {
  var app = angular.module('items', []);

  app.controller('InventoryController', function(){
    var inventory = this;
    inventory.items = [];

    this.addItem = function(item) {
      inventory.items.push(item);
    }

    this.removeItem = function(item) {
      var idx = inventory.items.indexOf(item);
      if (idx > -1) {
        inventory.items.splice(idx, 1);
      }
    }

  });

//  app.controller('ReviewController', function() {
//    this.review = {};
//
//    this.addReview = function(product) {
//      product.reviews.push(this.review);
//
//      this.review = {};
//    };
//  });
})();
