var SandwichMaker = (function(maker) {

    var condimentPrices = {
        "Tabasco": 1,
        "Hummus": 2,
        "Mustard": 2,
        "Oregano": 3
    };

    maker.addCondiment = function(condiment) {                 
            var addingCondimentPrice = condimentPrices[condiment];
            SandwichMaker.adjustPrice(addingCondimentPrice);
            };
    maker.subtractCondiment = function(condiment) {
            var addingCondimentPrice = condimentPrices[condiment];
            SandwichMaker.adjustPrice(-addingCondimentPrice);
            };

    return maker;                     
})(SandwichMaker || {});