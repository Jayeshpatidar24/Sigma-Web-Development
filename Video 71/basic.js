// // // // 1
// // // function add(a, b)

// // // // 2
// // // function square(n)

// // // // 3
// // // function isEven(n)

// // function add(a,b){
// //     return a+b;
// // }

// // console.log(add(20,20));

// // function square(n){
// //     return n*n;
// // }

// // console.log(add(20));

// // function isEven(n){
// //     if(n%2==0) return `${n} is even`;
// // }

// // isEven(4)

// // function max(a, b) {
// //   // jo bada ho vo return kar
// //  return a>b? a:b;
// // }

// // console.log(max(180,910));


// // function maxOfThree(a, b, c) {
// //   // sabse bada return kar
// // //   return a>b>c?b: b>a>c?a : c>a>b? c : false;

// // if(a>b && a>c) return a;
// // else if (b>a && b>c) return b;
// // else return c;
// // }

// // console.log(maxOfThree(123,223,122));

// // function reverseString(str) {
// //   // string ulta kar
// //   let rev = [];
// //   for(let i=0; i<str.length;i++){
// //     rev = str.slice(str[0]);
// //   }

// // }

// // console.log(reverseString("Jayesh"));

// // function revStr(str){
// //     let rev = "";
// //     let i = (str.length-1);
// //     while(i>=0){
// //       rev =  rev + str[i];
// //       i--;
// //     } return rev;
// // }

// // console.log(revStr("Jayesh"));

// function isPalindrome(str) {
//   // agar string ulta karke same aaye → true
//   // warna false
// let rev = "";
// for(let i=str.length-1; i>=0; i--){
//     rev = rev + str[i];
// }   
// //    return str==rev?true:false;
// return str === rev;

// }

// console.log(isPalindrome("nin"));