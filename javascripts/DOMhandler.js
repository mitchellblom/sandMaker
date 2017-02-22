// Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
// var maker;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meatMenu");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// Get the value chosen from the DOM

meatChooser.addEventListener("change", function(e)    {
    meatChooser = e.target.defaultValue;
    console.log("selected meats: ", meatChooser);  	
    SandwichMaker.addMeat(meatChooser);
});
		
  // Determine the price of the topping chosen


  // Add the topping to the SandwichMaker to increase the total price