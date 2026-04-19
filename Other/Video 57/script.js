//loops

console.log("LoopzZ");
   

//for loop
//   for(let i=1;i<10;i++){
//     console.log(i +"//hello");
//   }


//Object key 

// let obj = {
//     name : "jay",
//     age : 22,
//     type : "human"
// }

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
//     const element = obj[key];
//     console.log(element,key);
// }

// for (const c of "123") {
//     console.log(c)
// }

//while loop

// let i = 10;
// while(i<6){
//     console.log(i);
//     i++;
// }

//do while 
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i<10);



let object = {
name : "vidhya",
age : 21,
address : "gujrat"
}
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    console.log(key,  element )
}
  