// Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
// var maker;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meatMenu");
var breadChooser = document.getElementById("breadMenu");
var cheeseChooser = document.getElementById("cheeseMenu");
var veggieChooser = document.getElementById("veggieMenu");


// console.log(breadChooser);
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// Get the value chosen from the DOM

//////////////////// MEAT CHOOSER ///////////////////

meatChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addMeat(e.target.value);
    } else {
        SandwichMaker.subtractMeat(e.target.value);
    }
});

//////////////////// BREAD CHOOSER ///////////////////

breadChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addBread(e.target.value);
    } else {
        SandwichMaker.subtractBread(e.target.value);
    }
});

//////////////////// CHEESE CHOOSER ///////////////////

cheeseChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addCheese(e.target.value);
    } else {
        SandwichMaker.subtractCheese(e.target.value);
    }
});

//////////////////// VEGGIE CHOOSER ///////////////////

veggieChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addVeggie(e.target.value);
    } else {
        SandwichMaker.subtractVeggie(e.target.value);
    }
});

// Determine the price of the topping chosen
// Add the topping to the SandwichMaker to increase the total price