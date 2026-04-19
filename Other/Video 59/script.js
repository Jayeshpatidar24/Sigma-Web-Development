 
console.log("Faulty Calculator");

function calc(n1, n2, n3) {
    let result;

    if (n3 === "+") {
        result = n1 - n2;
    } else if (n3 === "-") {
        result = n1 - n2;
    } else if (n3 === "*") {
        result = n1 * n2;
    } else if (n3 === "/") {
        result = n1 / n2;
    } else {
        return "Invalid operator";
    }

    return result;
}

let n1 = Number(prompt("num1"));
let n3 = prompt("operator");
let n2 = Number(prompt("num2"));

console.log(calc(n1, n2, n3));

