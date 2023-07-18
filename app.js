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

//Conditionals
let subscribed = false;
let loggedIn = true;

// Order of else if statements is important
if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell user to upgrade their subscription");
} else {
  console.log("tell user to log into account");
}

//practise
let cash = 50;
let price = 40;
let difference = cash - price;

if (cash > price) {
  console.log(`you paid extra - here's ${difference} dollars change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enough money - you still owe ${difference * -1} dollars`);
}

//Comparison Operators <, >, >=, =<

//Logical operatars && and ||; they are Booleans themselves so attaching  "=== true" to end is redundant

let cashMoney = 50;
let priceMoney = 40;
let isStoreOpen = false;

if (cashMoney >= priceMoney && isStoreOpen) {
  console.log("We have enough cash to buy the product");
}

// The ! in front of the variable isStoreOpen means essentially if isStoreOpen === false
if (cashMoney <= priceMoney || !isStoreOpen) {
  console.log("Let's check another store");
}

//Falsy and Truthy values

if (0) {
  console.log("Print the reciept");
} else if (10) {
  console.log("The darn machine doesn't work");
}

//practise

let randoVal =
  "This an example of a string; the console should tell you whether or not it's a truthy or falsy statement";
if (randoVal) {
  console.log(!!randoVal);
} else {
  console.log(!!randoVal);
}

//Ternary Operators - for when the line of code can be contained in one line; in other circumstances, use if statements

let hot = true;

hot ? console.log("Weather is hot outside") : console.log("Weather is cold");

//practise

let Subscribed = true;
let inLogged = false;

Subscribed && inLogged
  ? console.log("Show video")
  : console.log("Don't show video");

// Or

// let str = Subscribed && inLogged ? "Show video" : "Don't show video";
// console.log (str);

let newCash = 50;
let newPrice = 40;
let IsstoreOpen = true;

let recieptStatus =
  newCash >= newPrice && IsstoreOpen ? "Give receipt" : "Don't give receipt";
console.log(recieptStatus);

//Loops - starting with the 'while' loop (makes the most sense but is hardly used)

let count = 1;
// Using the <= will correlate with the number of runs displayed on the console
// Prints out numbers 1-100 in the console.
// count <== sets the conditiosn of exit for the loop
while (count <= 100) {
  console.log(count);
  count = count + 1;
}

//the 'for' loop - the commost industry loop
// i = 0 initializes i
// i <= sets its conditions of exit for the loop
// i + 1 is the same as ++i or i++ (This incrementation stops an infinite for loop which essentially crashes the browser)

for (let i = 0; i <= 4; ++i) {
  console.log(i);
}

//practise

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Frontend Simplified");
  } else if (i % 3 === 0) {
    console.log("Frontend");
  } else if (i % 5 === 0) {
    console.log("Simplified");
  } else console.log(i);
}

//practise 2

let strName = "Frontend Simplified";
for (let i = 0; i < strName.length; i++) {
  console.log(strName[i]);
}
