//factorial

// let num = prompt("Apna naam likho:");
// console.log(num);

//  let num = 4;

// const factorial = (n) => {
//     let i = 1;
//     let result;
//     for(i=1; i<=n; i++){
//         result = (i-n)*(n);
//     }
//   return result;
// }

// console.log(factorial(num));

// let num = Number(prompt("Number daal:"));

// const factorial = (n) => {
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(num));

// let num = Number(prompt("Number daal:"));

// const factorial = (n) => {
//     let result = 1;
//     for(let i = 1; i <= n; i++){
//         result = result * i;
//     }

//     // 1 = 1 * 1  1 *2  2*3  6*4  24*5
//     return result;
// }

// let ans = factorial(num);
// alert("Factorial = " + ans);


let num = Number(prompt("Enter number"));

const factorial = (n) => {
    let result =1;
    for(let i=1; i<=n; i++){
        result = result * i;
    }
    return result;
}

let ans = factorial(num);
alert("facorial "+ ans);