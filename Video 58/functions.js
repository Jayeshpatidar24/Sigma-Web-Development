 function queR(a,b){
    // if(a ===  undefined){
    //     a = 1;
    // } if (b === undefined){
    //     b =1;
    // }
    // // let ambi = b === undefined ?( b = 1) : a === undefined ? (a = 1)
    // let ambi = (b === undefined) ? (b = 1) : (a === undefined ? (a = 1) : null);
//  a = a ?? 1;
//  b = b ?? 1;
// b = a || 1;
a = a ?? 0;
b = b ?? 0;  // yeh ham kab use karte hai?? Ans: Jab parameterhame pass krna hoga 2 , 3 ....
            //  but ham user nhi kre tob program ise use karke error avoid karega
            // ?? ye wala jab alue undefined ya null ho aur || ye wala jab value falsy ho 

    return a+b;

 }

 console.log(queR(12,null));