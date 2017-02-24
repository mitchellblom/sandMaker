// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var meatPrices = {
        "none": 0,
        "turkey": 1,
        "bacon": 2,
        "ham": 3
    };

    maker.addMeat = function(meat) { // meat is the same as e.target.value passed from the DOMhandler.js
        if (meat === "none") {
            //this is where i would reset the checkboxes
        } else {
            var addingMeatPrice = meatPrices[meat]; //key values must be in brackets
            SandwichMaker.adjustPrice(addingMeatPrice);
        }
    };
    maker.subtractMeat = function(meat) {
            var addingMeatPrice = meatPrices[meat];
            SandwichMaker.adjustPrice(-addingMeatPrice);
        };

    return maker; // Return the new, augmented object with the new method on it
})(SandwichMaker || {});


// a method is a function that lives on an object