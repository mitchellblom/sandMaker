// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meatMenu");
var breadChooser = document.getElementById("breadMenu");
var cheeseChooser = document.getElementById("cheeseMenu");
var veggieChooser = document.getElementById("veggieMenu");
var selectedToppings = [];
var selectedToppingsToDOM = document.getElementById("toppingsSelected");
function removeUncheckedToppingsFromDom(e) {
        var index = selectedToppings.indexOf(e.target.value); 
            if (index > -1) {
                selectedToppings.splice(index, 1);
                }
        selectedToppingsToDOM.innerHTML = selectedToppings;
}

//////////////////// MEAT CHOOSER ///////////////////

meatChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addMeat(e.target.value);
        selectedToppings.push(e.target.value);                             
        selectedToppingsToDOM.innerHTML = selectedToppings;
    } else {
        SandwichMaker.subtractMeat(e.target.value);
        removeUncheckedToppingsFromDom(e);
    }
});

//////////////////// BREAD CHOOSER ///////////////////

breadChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addBread(e.target.value);
        selectedToppings.push(e.target.value);                             
        selectedToppingsToDOM.innerHTML = selectedToppings;
    } else {
        SandwichMaker.subtractBread(e.target.value);
        removeUncheckedToppingsFromDom(e);
    }
});

//////////////////// CHEESE CHOOSER ///////////////////

cheeseChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addCheese(e.target.value);
        selectedToppings.push(e.target.value);                             
        selectedToppingsToDOM.innerHTML = selectedToppings;
    } else {
        SandwichMaker.subtractCheese(e.target.value);
        removeUncheckedToppingsFromDom(e);
    }
});

//////////////////// VEGGIE CHOOSER ///////////////////

veggieChooser.addEventListener("change", function(e) {
    if (e.target.checked) {
        SandwichMaker.addVeggie(e.target.value);
        selectedToppings.push(e.target.value);                             
        selectedToppingsToDOM.innerHTML = selectedToppings;
    } else {
        SandwichMaker.subtractVeggie(e.target.value);
        removeUncheckedToppingsFromDom(e);
    }
});

// Determine the price of the topping chosen
// Add the topping to the SandwichMaker to increase the total price