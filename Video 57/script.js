console.log("hey there i just learn loops in Javascript")

let a = 45;
for(let i=1; i<a;i++){
    console.log("Greeting "+ i + " times");
}

let object = {
    name: "johnwich",
    id : 450,
    isActive: true,
}
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
    }
}

for (const element of "name") {
    console.log(element);
}
let i =0;
while(a>i){
    console.log("i am sorry")
    i++;
}
let j = 1;
do{
    console.log("i am its ok")
    j++;
}while(j<10)