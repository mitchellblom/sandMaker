var SandwichMaker = (function(maker) {

    var condimentPrices = {
        "Tabasco": .50,
        "Hummus": 1,
        "Mustard": .50,
        "Oregano": .50
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