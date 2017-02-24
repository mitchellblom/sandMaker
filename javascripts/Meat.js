// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var meatPrices = {
        "None": 0,
        "Turkey": 1,
        "Bacon": 2,
        "Ham": 3
    };

    maker.addMeat = function(meat) { // meat is the same as e.target.value passed from the DOMhandler.js
        if (meat === "none") {
            //this is where i would reset the checkboxes
        } else {
            var selectedToppings = [];
            var addingMeatPrice = meatPrices[meat]; //key values must be in brackets
            SandwichMaker.adjustPrice(addingMeatPrice);
        }
    };
    maker.subtractMeat = function(meat) {
            var addingMeatPrice = meatPrices[meat];                     /// THIS IS WHERE I LEFT OFF
            SandwichMaker.adjustPrice(-addingMeatPrice);
            var toppingsSelectedToDOM = document.getElementById("toppingsSelected");
        };

    return maker; // Return the new, augmented object with the new method on it
})(SandwichMaker || {});


// a method is a function that lives on an object