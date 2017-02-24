// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meatMenu");
var breadChooser = document.getElementById("breadMenu");
var cheeseChooser = document.getElementById("cheeseMenu");
var veggieChooser = document.getElementById("veggieMenu");
var selectedToppings = [];
var selectedToppingsToDOM = document.getElementById("toppingsSelected");

//////////////////// MEAT CHOOSER ///////////////////

meatChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addMeat(e.target.value);
        selectedToppings.push(e.target.value);                             
        selectedToppingsToDOM.innerHTML = selectedToppings;
    } else {
        SandwichMaker.subtractMeat(e.target.value);
        // var index = selectedToppings.indexOf(e.target.value);   
        //     if (index > -1) {
        //         selectedToppings.splice(index, 1);
        //         }
        //     for (var i; i < selectedToppings.length; i++) {}
        //         selectedToppingsToDOM.innerHTML += selectedToppings[i];
        //     };
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