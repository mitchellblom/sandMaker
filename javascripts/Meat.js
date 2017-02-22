// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  		"turkey": 1, 
	  	"bacon": 2,
	  	"ham": 3
	  };

	maker.getMeatPrices = function(){
		console.log(meatPrices);
    return meatPrices;
	};

  maker.addMeat = function(meat) {
    if (meat === "none") {
      //this is where i would reset the checkboxes
    } else {    
    var addingMeatPrice = meatPrices[meat];
    SandwichMaker.adjustPrice(addingMeatPrice);
  }
  };

    maker.subtractMeat = function(meat) { 
    if (meat === "none") {
      //this is where i would reset the checkboxes
    } else {       
    var addingMeatPrice = meatPrices[meat];
    SandwichMaker.adjustPrice(-addingMeatPrice);
  }
  };

                                                // Augment the original object with another method
  return maker;                             // Return the new, augmented object with the new method on it
})(SandwichMaker || {});


    // a method is a function that lives on an object