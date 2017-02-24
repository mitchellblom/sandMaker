var SandwichMaker = (function(maker) {

    var veggiePrices = {
        "lettuce": 1,
        "onion": 2,
        "tomato": 2,
        "pepper": 3
    };

    maker.addVeggie = function(veggie) {                 
            var addingVeggiePrice = veggiePrices[veggie];
            SandwichMaker.adjustPrice(addingVeggiePrice);
            };
    maker.subtractVeggie = function(veggie) {
            var addingVeggiePrice = veggiePrices[veggie];
            SandwichMaker.adjustPrice(-addingVeggiePrice);
            };

    return maker;                     
})(SandwichMaker || {});