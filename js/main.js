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
//randomizer.nextInt(min, max)
    ranAppe : function(){
        return this.appetizers[randomizer.nextInt(0, this.appetizer.length-1)];
    }, 
    ranEnt : function(){
        return this.entrees[randomizer.nextInt(0, this.entrees.length-1)];
    }, 
    ranRice : function(){
        return this.friedRice[randomizer.nextInt(0, this.friedRice.length-1)];
    }, 
    ranSNoodle : function(){
        return [this.stirFriedNoodle[randomizer.nextInt(0, this.stirFriedNoodle.length-1)], this.stirFriedNoodleAdd[randomizer.nextInt(0, this.stirFriedNoodleAdd.length-1)]];
    }, 
    ranSENS : function(){
        return this.sEasNoodleSoup[randomizer.nextInt(0, this.sEasNoodleSoup.length-1)];
    }, 
    ranVnSa : function(){
        return this.vNoodleSalad[randomizer.nextInt(0, this.vNoodleSalad.length-1)];
    }, 
    ranLunch : function(){
        return this.lunchbox[randomizer.nextInt(0, this.lunchbox.length-1)];
    }, 
    ranBev : function(){
        return this.beverages[randomizer.nextInt(0, this.beverages.length-1)];
    }, 
    ranSmoo : function(){
        return this.smoothies[randomizer.nextInt(0, this.smoothies.length-1)];
    }, 
}
const nav = document.getElementById("nav");
const icon = document.getElementsByClassName("brand");
const icon1 = icon[0];
const icon2 = icon[1];
const icon3 = icon[2];
window.onscroll = function(){
    if(document.body.scrollTop>=30||document.documentElement.scrollTop>=30){
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
        icon1.src = icon1.src.replace("media/logo-big.png","media/logo-sml.png");
        icon2.src = icon2.src.replace("media/logo-big.png","media/logo-sml.png");
        icon3.src = icon3.src.replace("media/logo-big.png","media/logo-sml.png");
        //icon2.src = "media/logo-sml.png";
    }
    else{
        nav.classList.remove("nav-transparent");
        nav.classList.add("nav-colored");
        icon1.src = icon1.src.replace("media/logo-sml.png","media/logo-big.png"), icon2.src = icon2.src.replace("media/logo-sml.png","media/logo-big.png"), icon3.src = icon3.src.replace("media/logo-sml.png","media/logo-big.png");
    }
}
