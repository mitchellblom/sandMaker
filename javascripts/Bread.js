// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var breadPrices = {
        "tortilla": 1,
        "white": 2,
        "wheat": 2,
        "rye": 3
    };

    // maker.getBreadPrices = function(){
    //   console.log(breadPrices);
    //   return breadPrices;
    // };

    maker.addBread = function(bread) { // bread is the same as e.target.checked 
        if (bread === "none") {
            //this is where i would reset the checkboxes
        } else {
            var addingBreadPrice = breadPrices[bread]; //key values must be in brackets
            SandwichMaker.adjustPrice(addingBreadPrice);
        }
    };
    maker.subtractBread = function(bread) {
        if (bread === "none") {
            //this is where i would reset the checkboxes
        } else {
            var addingBreadPrice = breadPrices[bread];
            SandwichMaker.adjustPrice(-addingBreadPrice);
        }
    };

    // Augment the original object with another method
    return maker; // Return the new, augmented object with the new method on it
})(SandwichMaker || {});


// a method is a function that lives on an object