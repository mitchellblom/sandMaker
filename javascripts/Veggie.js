var SandwichMaker = (function(maker) {

    var veggiePrices = {
        "Lettuce": 1,
        "Onion": .50,
        "Tomato": 1,
        "Peppers": 2.25
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