var SandwichMaker = (function(maker) {

    var veggiePrices = {
        "Lettuce": 1,
        "Onion": 2,
        "Tomato": 2,
        "Peppers": 3
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