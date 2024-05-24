function randomizer(minInt, maxInt){
    var x = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
    return(x);
}
var restaurant  = {
    appetizers : ["Egg Rolls", "Shrimp Spring Rolls",  "Spring Rolls Tofu", "Vegetable Pot Stickers", "Crab Rangoon", "French Fries", "Chicken Fingers", "Fried Shrimp", "Fried Tofu", "Original(chicken) Wing", "Tamarind Chicken Wings", "BBQ pork"], 
    entrees : ["Hunan Chicken", "Hunan Beef", "Hunan Shrimp", "Hunan Tofu", "Kung Pao Chicken", "Kung Pao Beef", "Kung Pao Combo", "Kung Pao Shrimp", "Chicken Broccoli", "Beef Broccoli", "Shrimp Broccoli", "Lemongrass Basil Chicken", "Lemongrass Basil combo", "Lemongrass Basil Shrimp", "Lemongrass Basil Beef", "Chicken Egg Foo Young", "Beef Egg Foo Young", "Ham Egg Foo Young", "Shrimp Egg Foo Young", "Salt and Pepper Shrimp", "Salt and Pepper Fish", "Spicy Chicken", "Spicy Beef", "Mongolian Beef", "Stir Friend Vegetable Tofu", "Szechwan Chicken", "Szechwan Wing", "Fire Wing", "Pepper Steak", "Orange Chicken", "Sweet & Sour Chicken", "Sesame Chicken", "General Tao's Chicken", "Vegetable Delight", "Stir Fried String Bean", "Vegetable Chop Suey", "Chinese Broccoli", "Shrimp W/ Lobster Sauce", "General Tso's (G T) Chicken", "Shrimp curry", "Beef Curry", "Chicken Curry", "Szechwan Tofu"], 
    friedRice : ["BBQ Pork Fried Rice", "Ham Fried Rice", "Shrimp Fried Rice", "Beef Fried Rice", "Chicken Fried Rice", "Prok Fried Rice", "Combination Fried Rice", "Vegetable Fried Rice", "Jumbo Shrimp Friend Rice", "Singapore Curry Chicken Fried Rice", "Hawaii Fried Rice", ], 
    stirFriedNoodle : ["Lo Mein", "Pad Thai", "Singapore Noodle", "Chow Mein", "Hor Fun", ], 
    stirFriedNoodleAdd : ["Vegetable", "Chicken", "Pork", "Shrimp", "Beef", "Combination"], 
    sEAsNoodleSoup : ["Seafood", "Shrimp Noodle Soup", "Beef Noodle Soup", "Beef Shank Noodle Soup", "Fish Ball Noodle Soup", "Shrimp,  Vegetable Noodle Soup", "Chicken Noodle Soup", "Vegetable Soup", "Beef Stew", "Cambodian Curry Chicken", "Beef Spicy Sour Lemongrass", "Curry Vegetable Soup", "Wonton Soup", "Egg Drop Soup"], 
    vNoodleSalad : ["Pork Vermicelli Noodle Salad", "Shrimp Vermicelli Noodle Salad", "Chicken Vermicelli Noodle Salad", "Beef Vermicelli Noodle Salad", "Combination Vermicelli Noodle Salad", "Tofu Vermicelli Noodle Salad", ], 
    lunchbox : ["Hunan Chickan", " Kung Pao Chicken", "Chicken Broccoli", "Sweet & Sour Chicken", "Spicy Chicken", "Shrimp Egg Foo Young", "Beef Broccoli", "Vegetable Delight", "Orange Chicken", "Chicken Lo Mein", "Shrimp Singapore Noodle", "Chicken Pad Thai", "Shrimp Noodle Soup", "Ribeye Noodle Soup", "Fish & Meatball Soup"], 
    beverages : ["Soda", "Jarritos", "Jasmine Tea", "Green Tea", "Honey Ginseng Tea", "Hot Ginger Tea", "Iced Tea", "Hot Hong Kong Milk Tea", "Lemonade", "Strawberry Lemonade", "Green Tea w/Tapioca", "Thai Ice Tea", "Thai Ice Coffee", "Horchata", "Ice Milk Tea", "Taro Milk Tea", "Coconut Milk Tea", "Strawberry Milk Tea", "Mango Milk Tea", ], 
    smoothies : ["Mango & Cocounut", "Strawberry & Banana", "Blueberry", "Jack Fruit", "Lychee", "Peach & Mango", "Taro", "Red Bean & Coconut", "Lemon", "Pina Colada", "Mixed Berry", "Kiwi Fruit", "Strawberry", "Avocado", "Coconut", "Kiwi & Strawberry", "Papaya", "Pineappple & Mango", "Cantaloupe", "Watermelon", "Tropical", "Rainbow Jelly & Coconut", "Mango", "Banana", "Strawberry Mango", "Lemon"], 
    ranAppe : function(){
        var maxInt = this.appetizers.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.appetizers[randomInteger];
    }, 
    ranEnt : function(){
        var maxInt = this.entrees.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.entrees[randomInteger];
    }, 
    ranRice : function(){
        var maxInt = this.friedRice.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.friedRice[randomInteger];
    }, 
    ranSNoodle : function(){
        var maxInt = this.stirFriedNoodle.length-1;
        var maxInt2= this.stirFriedNoodleAdd.length-1
        var randomInteger = randomizer(0,maxInt);
        var randomInteger2 = randomizer(0,maxInt2);
        return [this.stirFriedNoodle[randomInteger], this.stirFriedNoodleAdd[randomInteger2]];
    }, 
    ranSENS : function(){
        var maxInt = this.sEAsNoodleSoup.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.sEAsNoodleSoup[randomInteger];
    }, 
    ranVnSa : function(){
        var maxInt = this.vNoodleSalad.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.vNoodleSalad[randomInteger];
    }, 
    ranLunch : function(){
        var maxInt = this.lunchbox.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.lunchbox[randomInteger];
    }, 
    ranBev : function(){
        var maxInt = this.beverages.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.beverages[randomInteger];
    }, 
    ranSmoo : function(){
        var maxInt = this.smoothies.length-1;
        var randomInteger = randomizer(0,maxInt);
        return this.smoothies[randomInteger];
    }, 
}
const nav = document.getElementById("nav");
const icon = document.getElementsByClassName("brand");
var icon1 = icon[0];
window.onscroll = function(){
    if(document.body.scrollTop>=30||document.documentElement.scrollTop>=30){
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
        icon1.src = "media/logo-sml.png";

    }
    else{
        nav.classList.remove("nav-transparent");
        nav.classList.add("nav-colored");
        icon1.src = "media/logo-big.png";
    }
}
function appadd(){
    const appetttttt=document.getElementById("appetttttt");
    var y = document.getElementsByClassName("appetizz");
    if(y.length==1){
        y[0].remove();
        var appdiv = document.createElement("div");
        var appetif = restaurant.ranAppe();
        appdiv.textContent=appetif;
        appetttttt.appendChild(appdiv);
        appdiv.classList.add("mealprepdiv", "fs-4", "text-center","appetizz");
    }
    else{
        appdiv = document.createElement("div");
        appetif = restaurant.ranAppe();
        appdiv.textContent=appetif;
        appetttttt.appendChild(appdiv);
        appdiv.classList.add("mealprepdiv", "fs-4", "text-center","appetizz");  
    }
}
function entadd(){
    const entreeeeee=document.getElementById("entreeeeee");
    var a = document.getElementsByClassName("entrevevee");
    if(a.length==2){
        a[0].remove() , a[0].remove();
        var endiv = document.createElement("div");
        var entdiv = restaurant.ranEnt();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
    else{
        endiv = document.createElement("div");
        entdiv = restaurant.ranEnt();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
}
function friadd(){
    const entreeeeee=document.getElementById("entreeeeee");
    var a = document.getElementsByClassName("entrevevee");
    if(a.length==2){
        a[0].remove() , a[0].remove();
        var endiv = document.createElement("div");
        var entdiv = restaurant.ranRice();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
    else{
        endiv = document.createElement("div");
        entdiv = restaurant.ranRice();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
}
function vsadd(){
    const entreeeeee=document.getElementById("entreeeeee");
    var a = document.getElementsByClassName("entrevevee");
    if(a.length==2){
        a[0].remove() , a[0].remove();
        var endiv = document.createElement("div");
        var entdiv = restaurant.ranVnSa();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
    else{
        endiv = document.createElement("div");
        entdiv = restaurant.ranVnSa();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
}
function sfnadd(){
    const entreeeeee=document.getElementById("entreeeeee");
    var a = document.getElementsByClassName("entrevevee");
    if(a.length==2){
        a[0].remove(); 
        a[0].remove();
        var endiv = document.createElement("div");
        var entdiv = restaurant.ranSNoodle();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
    else{
        endiv = document.createElement("div");
        entdiv = restaurant.ranSNoodle();
        endiv.textContent=`${entdiv[0]} with a ${entdiv[1]} topping`;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
}
function seanadd(){
    const entreeeeee=document.getElementById("entreeeeee");
    var a = document.getElementsByClassName("entrevevee");
    if(a.length>=2){
        a[0].remove() , a[0].remove();
        var endiv = document.createElement("div");
        var entdiv = restaurant.ranSENS();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
    else{
        endiv = document.createElement("div");
        entdiv = restaurant.ranSENS();
        endiv.textContent=entdiv;
        entreeeeee.appendChild(endiv);
        endiv.classList.add("entrevevee", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
}
function bevadd(){
    const drinkkk=document.getElementById("drink");
    var a = document.getElementsByClassName("drinkik");
    if(a.length==1){
        a[0].remove();
        var bediv = document.createElement("div");
        var bdivv = restaurant.ranBev();
        bediv.textContent=bdivv;
        drinkkk.appendChild(bediv);
        bediv.classList.add("drinkik", "mealprepdiv", "fs-4", "text-center", "col-sm");
    }
    else{
        bediv = document.createElement("div");
        bdivv = restaurant.ranBev();
        bediv.textContent=bdivv;
        drinkkk.appendChild(bediv);
        bediv.classList.add("drinkik", "mealprepdiv", "fs-4", "text-center");
    }
}
function smadd(){
    const drinkkk=document.getElementById("drink");
    var a = document.getElementsByClassName("drinkik");
    if(a.length==1){
        a[0].remove();
        var bediv = document.createElement("div");
        var bdivv = restaurant.ranSmoo();
        bediv.textContent=bdivv + " smoothie";
        drinkkk.appendChild(bediv);
        bediv.classList.add("drinkik", "mealprepdiv", "fs-4", "text-center");
    }
    else{
        bediv = document.createElement("div");
        bdivv = restaurant.ranSmoo();
        bediv.textContent=bdivv + " smoothie";
        drinkkk.appendChild(bediv);
        bediv.classList.add("drinkik", "mealprepdiv", "fs-4", "text-center");
    }
}
function lbadd(){
    const lunchhh=document.getElementById("lunchhhhh");
    var a = document.getElementsByClassName("luncher");
    if(a.length==1){
        a[0].remove();
        var ldiv = document.createElement("div");
        var ldivv = restaurant.ranLunch();
        ldiv.textContent=ldivv;
        lunchhh.appendChild(ldiv);
        ldiv.classList.add("luncher", "mealprepdiv", "fs-4", "text-center");
    }
    else{
        ldiv = document.createElement("div");
        ldivv = restaurant.ranLunch();
        ldiv.textContent=ldivv;
        lunchhh.appendChild(ldiv);
        ldiv.classList.add("luncher", "mealprepdiv", "fs-4", "text-center");
    }
}