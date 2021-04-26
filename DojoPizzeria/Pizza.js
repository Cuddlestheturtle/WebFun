

var pizzaoven = {
    'crustType': ["deep dish",'hand tossed','thin crust'],
    'sauceType': ['traditional','marinara'],
    'cheeses' : ["mozzarella",'feta','swiss'],
    'toppings' : ["peperoni",'olives','mushroom','onions'],
    'pizzainfo': function(){
        console.log("custType: " + this.crustType);
        console.log("sauceType:  " + this.sauceType);
        console.log("cheeses:   " + this.cheeses);
        console.log("toppings: " + this.toppings);
    }
}



function pizzaoven(crust,sauce,cheese,toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaoven("hand tossed","marinana",['mozzarealla','feta'],['mushroom','olives','onions']);
console.log(p1)

function pizzaoven(crust,sauce,cheese,toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaoven("deep dish","marinana",'feta',['mushroom','onions']);
console.log(p1)

