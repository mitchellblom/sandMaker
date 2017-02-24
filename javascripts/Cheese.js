var SandwichMaker = (function(maker) {

    var cheesePrices = {
        "colby": 1,
        "cheddar": 2,
        "swiss": 2,
        "american": 3
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