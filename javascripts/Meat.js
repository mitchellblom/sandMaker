// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		"turkey": 1, 
	  	"bacon": 2,
	  	"ham": 3
	  };

	maker.getMeatPrices = function(){
		return meatPrices
	};

  // Augment the original object with another method
  maker.addMeat = function(choices, checked) {  // e.target.checked, passed in from DOM
  	var currentPrice = meatPrices.choices
  	if (checked === true) {
       SandwichMaker.adjustPrice(currentPrice);
      } else {
        SandwichMaker.adjustPrice(-currentPrice);
    }
    return meatPrices;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});

    SandwichMaker.adjustPrice(currentPrice); //withinThisObject.thereIsThisFunctionOrMethod(andIwantToPassThisThruIt)

    // a method is a function that lives on an object