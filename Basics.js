// var, let, const

// var has global scope which overwrites variable value without informing. So we use let and const.

// alert("hello world");

// console.log("Hello World");

// 2 + 2 = 4

// 3 - 2 = 1

// 6 / 2 = 3

// 2 * 2 = 4

// 1 + 1 * 3  = 4  - Order of operations * / Done first + - after. 
// it calculates left to right we should use brackets for accuracy.
// (1 + 1) * 3 = 6

// 10% tax calculation on product totals

// 20.95 + 7.99 * 2 * 0.1 = 22.548
// (20.95 + 7.99 * 2) * 0.1  = 3.693 
// OR
// product totals * 0.1

// how to calculate 10% of some value 

// 1% = 1/100 
// 10% = 10/100 = 0.1


// 2, 3, 4 = integers
// 2.5, 3.5 = floats

// some floats calculations are glitchy

// 20.95 + 7.99
// 28.939999999999999998 (wrong way of calculate floats)


// (2095 + 799) / 100 
// 28.94  (right way of calculate floats)

// Math is a library and these are math methods in javascript we can learn as much as we want.

// console.log(Math.round(2.4));  2
// console.log(Math.round(2.6));  3


// function difference2(a, b) {
//   return a - b;
// }

// console.log(difference2(3, 4));


// function difference(a, b) {
//   return Math.abs(a - b);
// }

// console.log(difference(3, 4));


// The result is therefore always a positive number or 0.


// alert & prompts takes strings even numbers as strings.


// Type Coercion

// String + 90 = "string90"

// if we add string to a number it makes it string as well


// ex - '$' + 20.95 + 7.99 = '$20.957.99' it will not do math but just combine them

// to safeguard from this  '$' + (2095 + 799) / 100 = $28.94

// OR

// console.log(`$${(2095 + 799) / 100}`); Use Of Backticks Or template strings
// it give you ability to do interpolation and make multi-line strings.
