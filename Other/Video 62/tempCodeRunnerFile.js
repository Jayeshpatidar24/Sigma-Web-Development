console.log("Name Generator");

// let adjective = {
//     adj1 : crazy,
//     adj2 : fire,
//     adj3 : amazing
// }

// let shopName = {
//     name1 : garments,
//     name2 : foods,
//     name3 : engines

// }

// let lastWord = {
//     last1 : hub,
//     last2 : limited,
//     last3 : fine
// }
 

let random = Math.random();

let first, second, third;


//first name
if(random > 0.33){
    first = "crazy"
} else if(random >= 0.33 && random < 0.66){
    first = "fire"
} else {
    first = "amazing"
}

//second name
random = Math.random();
if(random > 0.33){
    second = "foods"
} else if(random >= 0.33 && random < 0.66){
    second = "garments"
} else {
    second = "engines"
}

// third name
random = Math.random();
if(random > 0.33){
    third = "hub"
} else if(random >= 0.33 && random < 0.66){
    third = "factory"
} else {
    third = "shop"
}

console.log(`${first} ${second} ${third} `);