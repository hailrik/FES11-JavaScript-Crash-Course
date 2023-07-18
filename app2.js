// This the Function Definition - where the code is set
// Where the "name" currently is where the parameters are set, multiple parameters can be inserted here
// Remember backticks can allow you to insert variables into a string
function welcomePersonToFES(firstName, lastName) {
  console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`);
}

// Call the function - where the variables are set
// When calling the function the number of arguments are equal and same order as the parameters in the funciton definition
welcomePersonToFES("Rahik", "Chowdhury");
welcomePersonToFES("Akib", "Chowdhury");
welcomePersonToFES("Lamiah", "Chowdhury");

//Returns
function fn() {
  return "my return";
  console.log("my function");
}

console.log(fn());

//Here we have two parameters, num1 and num2
//the order of your parameters and arguments are very important
function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumOfTwoNumbers(10, 10));

//practice

function convertCelsuisToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(convertCelsuisToFahrenheit(1));
console.log(convertCelsuisToFahrenheit(10));
console.log(convertCelsuisToFahrenheit(100));

// Arrow Functions

const CelsuisToFahrenheit = (celsius) => {
  return celsius * 1.8 + 32;
};

console.log(CelsuisToFahrenheit(1));

// Arrays - are created simply by setting with = [...]
// reduce the number of variables you need to create
// They can contain multiple data types, not just numbers but also numbers with booleans, strings etc...

let arr = [20, 30, 40, 50, 100];

// Accessing first element of array (20)
console.log(arr[0]);

// Last element of array [100]
console.log(arr[arr.length - 1]);

// Adding elements to array using .push method
// Adds element to the end of the array
// Javascript executes line by line so the last element of the array has only been updated just now

arr.push(200);

console.log(arr);
console.log(arr[arr.length - 1]);

// Array callback syntax; the filter methods
// The callback returns a new array usually with just [] displayed on the console log
// Because the filter method only returns the element of the current iteration of the array if that iteration returns true
let newArr = arr.filter((element) => {
  console.log(element);
  if (element < 50) {
    return true;
    console.log("3");
  }
});

console.log(newArr);

// The array filter method starts off with an empty array []
// It looks at the first element of the array and console.logs it
// It checks if the element is less than 50
// It is true so as the callback returns true for that current iteration, it adds it to the new empty array
// As soon as it returns, it doens't move forward with executing new lines of code
// It checks the next element and so on

// Shorter ways of doing things
let arr1 = [30, 25, 43, 79, 10];

//You don't need brakets around the element as it is the only variable being called
let newArr1 = arr1.filter((element) => {
  return element < 50;
});
console.log(newArr1);

let newArr2 = arr1.filter((element) => element < 50);
console.log(newArr2);

//practice

let grades = ["A+", "A", "FAIL"];
let grades2 = ["FAIL", "FAIL", "B"];
let grades3 = ["FAIL"];

let newGrades = grades.filter((element) => element !== "FAIL");
console.log(newGrades);

for (let i = 0; i < grades.length; ++i) {
  console.log(grades[i]);
}

let betterGrades = [];

for (let i = 0; i < grades.length; ++i) {
  if (grades[i] !== "FAIL") {
    betterGrades.push(grades[i]);
  } else console.log("FAIL");
}

console.log(betterGrades);

