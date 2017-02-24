var SandwichMaker = (function(maker) {

    var cheesePrices = {
        "Colby": 1,
        "Cheddar": 2,
        "Swiss": 2,
        "American": 3
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