// Gives the variable type of any data
console.log(typeof "4");

// String basics
// Prints last letter in string
console.log("David"[4]);
// Prints length of string
console.log("David".length);
//Shown together
let str = "David";
console.log(str[str.length - 1]);

//Number basics
//Gives the remainder of any calculation
console.log(18 % 5);

//Boolean basics - simple true or false calculations; the below gives false
console.log(5 > 10);

// Variable basics (the light blue one)
let name = "Rahik";
// Example of Camelcase naming convention for variables
let fullName = "Rahik Chowdhury";

//Stores the data
let temperature = 20;
temperature = temperature + 2;
console.log(temperature);

//You cannot reassign a const variable - it stays the same
const heat = "30";

// Practise; use semi-colons at the end for industry standard
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

// Equality basics
// One equals just resets a variable
// Two checks if the values are the same and prints out a boolean confirmation*/
let twoEquals = "1" == 1;
console.log(twoEquals);
// Three also checks the data types; this needs to be put into '' to be made true
// Almost always want to use the triple equals for more type safety
let threeEquals = "1" === 1;
console.log(threeEquals);
// Introudicng an ! to a figure turns the answer opposite to what it would be if there was an equals symbol there
let firstBool = 1 !== 1;
console.log(firstBool);
//The same can be said of the boolean type
let secondBool = !false;
console.log(secondBool);
