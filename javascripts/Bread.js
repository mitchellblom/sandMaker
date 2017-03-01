var SandwichMaker = (function(maker) {

    var breadPrices = {
        "Tortilla": 1,
        "White": 2,
        "Wheat": 2,
        "Rye": 3
    };

    maker.addBread = function(bread) {
            var addingBreadPrice = breadPrices[bread];
            SandwichMaker.adjustPrice(addingBreadPrice);
        };
    maker.subtractBread = function(bread) {
            var addingBreadPrice = breadPrices[bread];
            SandwichMaker.adjustPrice(-addingBreadPrice);
        };

    return maker;
})(SandwichMaker || {});