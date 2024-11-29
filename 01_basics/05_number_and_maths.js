const num = new Number(100);
// console.log(num);
// console.log(num.toString());

const num1 = 100.23;
// console.log(num.toPrecision(4));

const otherNum = 1000000;
// console.log(otherNum.toLocaleString('en-IN'));

const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;

// console.log(max+'..'+min);

//  math library also has many methods 

// like round, ceil, floor, abs, random etc

// console.log(Math.random()); // its gives values b/w 0-1
// we calculate range between 
const maxVal = 20;
const minVal = 10;

console.log(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal);
