//function
function greet(name){
    console.log("hello " + name + " Happy Spring");
}

greet("jay")



function bindHard(a,b){
    return a*b;
}

 let Parinam =  bindHard(10,40);
 console.log(Parinam);


//arrow function
const name = (a,b)=> a+b;
let result = name(10,10);
console.log(result);

function para(symbol){
    return symbol + 2022;
}

let findme = para("hello my dear sf ");
console.log(findme);