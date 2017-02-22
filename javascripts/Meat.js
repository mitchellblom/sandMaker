// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		"turkey": 1, 
	  	"bacon": 2,
	  	"ham": 3
	  };

	maker.getMeatPrices = function(){
		return meatPrices;
	};

  maker.addMeat = function(choices) {     
    var currentPrice = meatPrices[choices];
    SandwichMaker.adjustPrice(currentPrice);
  };
                                                // Augment the original object with another method
  return maker;                             // Return the new, augmented object with the new method on it
})(SandwichMaker || {});


    // a method is a function that lives on an object







// OLD FOR REFERENCE :
//     maker.addMeat = function(choices, checked) {  // e.target.checked, passed in from DOM
//     var currentPrice = meatPrices.choices
//     if (checked === true) {
//        SandwichMaker.adjustPrice(currentPrice);
//       } else {
//         SandwichMaker.adjustPrice(-currentPrice);
//     }
//     return meatPrices;
//   };

    // SandwichMaker.adjustPrice(currentPrice); //withinThisObject.thereIsThisFunctionOrMethod(andIwantToPassThisThruIt)
