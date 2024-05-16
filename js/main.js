var restaurant={
    appetizers:["Egg Rolls","Shrimp Spring Rolls","Vegetable Pot Stickers","Crab Rangoon","French Fries","Chicken Fingers","Fried Shrimp","Fried Tofu","Chicken Wing","Tamarind Chicken Wings","BBQ pork"],
    entrees:["Hunan Chicken","Hunan Beef","Hunan Shrimp","Hunan Tofu","Kung Pao Chicken","Kung Pao Beef","Kung Pao Combo","Kung Pao Shrimp","Chicken Broccoli","Beef Broccoli","Shrimp Broccoli","Lemongrass Basil Chicken","Lemongrass Basil combo","Lemongrass Basil Shrimp","Lemongrass Basil Beef","Chicken Egg Foo Young","Beef Egg Foo Young","Ham Egg Foo Young","Shrimp Egg Foo Young","Salt and Pepper Shrimp","Salt and Pepper Fish","Spicy Chicken","Spicy Beef","Mongolian Beef","Stir Friend Vegetable Tofu","Szechwan Chicken","Szechwan Wing","Fire Wing","Pepper Steak","Orange Chicken","Sweet & Sour Chicken","Sesame Chicken","General Tso's Chicken","Vegetable Delight","Stir Fried String Bean","Vegetable Chop Suey","Chinese Broccoli","Shrimp W/ Lobster Sauce","G T Chicken","Shrimp curry","Beef Curry","Chicken Curry",],
    friedRice:["Pork Fried Rice","Ham Fried Rice","Shrimp Fried Rice","Beef Fried Rice","Chicken Fried Rice","Combination Fried Rice","Vegetable Fried Rice","Jumbo Shrimp Friend Rice","Singapore Curry Chicken Fried Rice","Hawaii Fried Rice",],
    stirFriedNoodle:["Lo Mein","Pad Thai","Singapore Noodle","Chow Mein","Hor Fun",],
    sEAsNoodleSoup:["Seafood","Shrimp Noodle Soup","Beef Noodle Soup","Beef Trio","Beef Shank & Tendon","Beef Meatball","Fish Ball Noodle Soup","Vegetable","Beef Stew","Cambodian Curry Chicken","Beef Spicy Sour Lemongrass","Curry Vegetable",],
    vNoodleSalad:["Pork Vermicelli Noodle Salad","Shrimp Vermicelli Noodle Salad","Chicken Vermicelli Noodle Salad","Beef Vermicelli Noodle Salad","Combination Vermicelli Noodle Salad","Tofu Vermicelli Noodle Salad",],
    lunchbox:["Hunan Chickan"," Kung Pao Chicken","Chicken Broccoli","Sweet & Sour Chicken","Spicy Chicken","Shrimp Egg Foo Young","Beef Broccoli","Vegetable Delight","Orange Chicken","Chicken Lo Mein","Shrimp Singapore Noodle","Chicken Pad Thai","Shrimp Noodle Soup","Ribeye Noodle Soup","Fish & Meatball Soup"],
    beverages:["Soda","Jarritos","Jasmine Tea","Honey Ginseng Tea","Iced Tea","Hong Kong Milk Tea","Lemonade","Strawberry Lemonade","Green Tea w/Tapioca","Thai Ice Tea","Thai Ice Coffee","Horchata"],
    smoothies:["Mango & Cocounut","Strawberry & Banana","Blueberry","Jack Fruit","Lychee","Peach & Mango","Taro","Red Bean & Coconut","Lemon","Pina Colada","Mixed Berry","Kiwi Fruit","Strawberry","Avocado","Coconut","Kiwi & Strawberry","Papaya","Pineappple & Mango","Cantaloupe","Watermelon","Tropical","Rainbow Jelly & Coconut","Mango","Banana","Strawberry Mango","Lemon"],
//randomizer.nextInt(min,max)
    ranAppe: function(){
        return this.appetizers[randomizer.nextInt(0,this.appetizer.length-1)]
    },
    ranEntr: function(){
        return this.entrees[randomizer.nextInt(0,this.entrees.length-1)]
    },
    ranRice: function(){
        return this.friedRice[randomizer.nextInt(0,this.friedRice.length-1)]
    },
    ranSNoodle: function(){
        return this.stirFriedNoodle[randomizer.nextInt(0,this.stirFriedNoodle.length-1)]
    },
    ranSENS: function(){
        return this.sEasNoodleSoup[randomizer.nextInt(0,this.sEasNoodleSoup.length-1)]
    },
    ranVnSa: function(){
        return this.vNoodleSalad[randomizer.nextInt(0,this.vNoodleSalad.length-1)]
    },
    ranLunch:function(){
        return this.lunchbox[randomizer.nextInt(0,this.lunchbox.length-1)]
    },
    ranBev:function(){
        return this.beverages[randomizer.nextInt(0,this.beverages.length-1)]
    },
    ranSmoo:function(){
        return this.smoothies[randomizer.nextInt(0,this.smoothies.length-1)]
    },
}
const nav=document.getElementById("nav");
const icon=document.getElementsByClassName("brand");
const icon1=icon[0];
const icon2=icon[1];
const icon3=icon[2];
window.onscroll=function(){
    if(document.body.scrollTop>=10||document.documentElement.scrollTop>=10){
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
        icon1.src="media/logo-sml.png";
        icon2.src="media/logo-sml.png";
        icon3.src="media/logo-sml.png";
    }
    else{
        nav.classList.remove("nav-transparent");
        nav.classList.add("nav-colored");
        icon1.src="media/logo-big.png", icon2.src="media/logo-big.png", icon3.src="media/logo-big.png";
    }
}
