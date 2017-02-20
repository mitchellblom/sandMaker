var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  var 

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();