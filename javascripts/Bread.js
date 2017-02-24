var SandwichMaker = (function(maker) {

    var breadPrices = {
        "tortilla": 1,
        "white": 2,
        "wheat": 2,
        "rye": 3
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