// Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
// var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meatMenu");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

// Get the value chosen from the DOM

meatChooser.addEventListener("change", function(e)	{
	meatChooser = document.getElementById("meatMenu").childNodes;
	console.log("empty meat inputs: ", meatChooser);  					
	for (var i = 0; i < meatChooser.length; i++) {
		console.log(meatChooser[i].defaultValue);
	};
});
		
  // Determine the price of the topping chosen


  // Add the topping to the SandwichMaker to increase the total price