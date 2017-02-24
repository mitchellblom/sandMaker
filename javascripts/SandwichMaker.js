var SandwichMaker = (function() {

    // Private variable to store the price
    var totalPrice = 0;
    var selectedToppings = [];

    // Return the public interface that other code can interact with

    return {
        getPrice: function() {
            return totalPrice;
        },
        adjustPrice: function(currentPrice) {    //currentPrice comes from addingMeatPrice, addingCheesePrice, etc.  
            totalPrice += currentPrice;
            // console.log("totalPrice", totalPrice);
            var totalPriceToDOM = document.getElementById("totalPrice");
            totalPriceToDOM.innerHTML = totalPrice;
        }
    };
})();