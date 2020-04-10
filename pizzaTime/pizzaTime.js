var toppings = ["sausage", "onions", "bacon", "black olives"];
var pizza;
function pizzaTime(){
    console.log(toppings);
    pizza = "that one peter parker meme " + (toppings.join(", and "));
    console.log(pizza);
}
pizzaTime();