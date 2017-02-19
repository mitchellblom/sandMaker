// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		"turkey": 1, 
	  	"bacon": 2,
	  	"ham": 3
	  }

  // Augment the original object with another method
  maker.addMeat = function(choice) {
  	if (choice in meatPrices) {
  		meatSubtotal += meatPrices[choice];
  	}
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});