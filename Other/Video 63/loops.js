// let a = [1,33,5,6,88]

//  for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
//  }

//  a.forEach((value,index,arr) => {
//     console.log(index,value,arr);
//  });


//  let object = {
//     a : 1,
//     b : 2, 
//     c : 3
//  }
//  for (const key in object) {

//     if(object.hasOwnProperty.call(object,key)){
//         const element = object[key];
//           console.log(element)
//     }
   
//  }


//  let arr = [1,2,4,56,3]
//  for (const element of arr) {
//     console.log(element)
//  }

//  let newArr = arr.map((e)=>{
//     return e**2
//  })

//  console.log(newArr)

// const greaterThanSeven = (e) => {

//     if(e>7){
//        return true
//     }  return false
// }


//  console.log(newArr.filter(greaterThanSeven));


// const filterfours = (e) => {
//     if(e!=4){
//         return true
//     } return false
// }

// console.log(arr.filter(filterfours));



// const obj = {

// };
// obj.price = 500;
// obj.type = "gold"
// obj.avil = true;

// console.log(obj)

//  const arr = Object.entries(obj);
// console.log(arr);

// const goldfilter = (e) ==>  {
//     if(e, "gold"){

//     }
// }
// //filter

// const shopFilter = (e) => {
//     if(e == gold){
//         return false
//     } return true
// }

// console.log(obj.filter(shopFilter))

// let arrRed = [1,2,3,4,5,6,7] 

// const red = (a,b) => {
//   return a*b;
// }

// console.log(arrRed.reduce(red))


// const func = (value) => {
//   return value*5
// }

// console.log(arrRed.reduce(func));


let obj = {
    a : 1, 
    b : 2
}
let name = "jayesh"
console.log(Array.from(obj))