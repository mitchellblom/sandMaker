// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

    // Private variable to store the different meat prices
    var meatPrices = {
        "No Meat": 0,
        "Turkey": 1,
        "Bacon": 2,
        "Ham": 3
    };

    maker.addMeat = function(meat) { // meat is the same as e.target.value passed from the DOMhandler.js
        if (meat === "No Meat") {
            // function resetMeatsDom ()
        } else {
            var selectedToppings = [];
            //key values must be in brackets
            var addingMeatPrice = meatPrices[meat];
            SandwichMaker.adjustPrice(addingMeatPrice);
        }
    };
    maker.subtractMeat = function(meat) {
        var addingMeatPrice = meatPrices[meat];
        SandwichMaker.adjustPrice(-addingMeatPrice);
        var toppingsSelectedToDOM = document.getElementById("toppingsSelected");
    };

    // Return the new, augmented object with the new method on it
    return maker;
})(SandwichMaker || {});


// a method is a function that lives on an object