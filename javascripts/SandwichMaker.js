var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  
  // Return the public interface that other code can interact with

  return {
  	getPrice = function(){
		return currentPrice;
	};
    adjustPrice: function(currentPrice) {
      totalPrice += currentPrice;
    }
  };
})();