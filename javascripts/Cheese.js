var SandwichMaker = (function(maker) {

    var cheesePrices = {
        "Colby": 1.50,
        "Cheddar": 2,
        "Swiss": 1.25,
        "American": 1
    };

    maker.addCheese = function(cheese) {                 
            var addingCheesePrice = cheesePrices[cheese];
            SandwichMaker.adjustPrice(addingCheesePrice);
        };
    maker.subtractCheese = function(cheese) {
            var addingCheesePrice = cheesePrices[cheese];
            SandwichMaker.adjustPrice(-addingCheesePrice);
        };

    return maker;                     
})(SandwichMaker || {});