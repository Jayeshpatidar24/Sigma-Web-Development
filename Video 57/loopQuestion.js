let num = 53;
let seen = [];  // yaha pe sab purane numbers store honge

while (num !== 1 && !seen.includes(num)) {
  seen.push(num);   // current number store karo

  let sum = 0;
  let temp = num;

  // digits ka square sum
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit;
    temp = Math.floor(temp / 10);
  }

  console.log(num, "→", sum);
  num = sum; // new number ban gaya
}

// result check
if (num === 1) {
  console.log("Happy Number 🎉");
} else {
  console.log("Not a Happy Number ❌");
}
