// Exercise:
// call the alert function with your name

const myName = 'Omar';
alert(myName);

// Exercise:
// call the confirm function and ask the user if they want to open the MDN documentation
// if they do, open it

const shouldOpenMDNDocs = confirm('Do You want to open MDN documentation?');

if (shouldOpenMDNDocs) {
    open('https://developer.mozilla.org/en-US/');
}

// Exercise:
// call the prompt function and ask the user how much is 5 times 5
//  -> if they provided the correct answer, praise them using alert 
//  -> provide 0 as the default value in the second argument
//  -> keep in mind that the prompt function returns a string

const multiplicationResult = prompt("How much is 5 times 5?", "0");

if (multiplicationResult === '25') {
    alert("That's correct! 5 times 5 equals: " + multiplicationResult);
} else {
    alert("Not really, 5 times 5 is not equal to " + multiplicationResult);
}

// Exercise:
// create the openYouTube function

function openYouTube() {
    open('https://www.youtube.com/');
}

// Exercise:
// create the greet function that accepts the name of the user as an argument
// -> it should use the alert function under the hood and greet the user using their name

function greet(userName) {
    alert('Hello ' + userName);
}

// Exercise:
// modify your greet function to accept two arguments:
//   the first name
//   and the last name
//   and combine them when calling the alert function in the body of your greet function

function greet(userFirstName, userLastName) {
    alert('Hello ' + userFirstName + ' ' + userLastName);
}

// Exercise:
// create the getTotalMealCost function that receives two arguments:
// a number representing the base cost of the meal
// a number that represents the tip percentage
// the function needs to return the total cost of the meal including the tip

function getTotalMealCost(mealCost, tipPercentage) {
    return mealCost + (mealCost*(tipPercentage/100));
}

const totalCost = getTotalMealCost(200, 10);
console.log(totalCost); // 220

// Homework

// 1. Implement the getGreeting function.

const greeting = getGreeting('John', 'Smith');
console.log(greeting); // Hi, “John Smith”. What's up?
// --------------------------------------------------

function getGreeting(firstName, lastname) {
    message = "Hi, \"${firstName} ${lastname}\". What's up?";
    return message;
}

// 2. Implement the isThisMyName function that returns true if provided with your name. Otherwise, return false.
// isThisMyName('Adam');

function isThisMyName(name) {
    return name === 'Omar';
}

isThisMyName('Omar');  // true

// 3. Implement the isThisBoolean  function that returns true  if provided with a boolean.

// isThisBoolean(true);  //true
// isThisBoolean(false);  // true
// isThisBoolean('true'); // false

function isThisBoolean(inputValue) {
    return typeof inputValue === 'boolean'
}

test = isThisBoolean(true);
console.log(test);

// 4. Implement the getCircleArea  function
// const radius = 5;
// const area = getCircleArea(radius);
// console.log(area); // 78.53981633974483
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI

function getCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

// 5. Implement the getCirclesAreaSum function that uses the getCircleArea function under the hood
// const circlesAreaSum = getCirclesAreaSum(5, 10);
// console.log(circlesAreaSum); // 392.69908169872417

function getCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

function getCirclesAreaSum(radius1, radius2) {
    return getCircleArea(radius1) + getCircleArea(radius2);
}

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

// 6. Create an account on codwars.com and do the following exercise:
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// Description:
// Given a month as an integer from 1 to 12, return to which quarter of
// the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; 
// month 6 (June), is part of the second quarter; and month 11 (November),
//  is part of the fourth quarter.

// Constraint:
// 1 <= month <= 12

function getQuarter(month) {
    if (Number.isInteger(month) && month >= 1 && month <= 12) {
        return Math.ceil(month / 3);
    }
    return "Month has to be a number between 1 and 12!"
}

console.log(getQuarter(2));

// 7. Write the convertMinutesToHours function.

// const hours = convertMinutesToHours(75);
// console.log(hours); // 1.25

function convertMinutesToHours(minutes) {
    return (minutes / 60).toFixed(2);
}

const hours = convertMinutesToHours(75);
console.log(hours); // 1.25

// 8. Write the isTextUppercase  function.

// isTextUppercase('Hello'); // false
// isTextUppercase('HELLO'); // true

function isTextUpperCase(text) {
    return text === text.toUpperCase();
}

console.log(isTextUpperCase('Hello'));

// 9. Description:
// Create a function that checks if a number n is divisible by two 
// numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
}

console.log(isDivisible(3, 1, 3)); 

// 10. Write the getBillboardPrice function that accepts two arguments:
// the text intended to use on the billboard
// the cost of a single character

// getBillboardPrice('Hello world!', 10); // 120
// getBillboardPrice('Hello world!', 15); // 180
// getBillboardPrice('To be, or not to be', 20); // 380

function getBillboardPrice(text, costPerChar) {
    return text.length * costPerChar;
}

console.log(getBillboardPrice('Hello world!', 10));

// 11. Very simple, given a number (integer / decimal / both depending 
// on the language), find its opposite (additive inverse).

// Examples:
// 1: -1
// 14: -14
// -34: 34

function getOppositeNumber(number) {
    return -number;
}

console.log(getOppositeNumber(-34));

// 12. In this simple assignment you are given a number and 
// have to make it negative. But maybe the number is already 
// negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make 
// no mathematical sense.

function makeNegative(number) {
    return number > 0 ? -number : number;  //operator trójargumentowy
}

console.log(makeNegative(1)); 

// 13. Description:
// It's pretty straightforward. Your goal is to create a function 
// that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to
// worry about strings with less than two characters.

function removeFirstAndLast(string) {
    return string.slice(1,-1);
}

console.log(removeFirstAndLast('hello'));    // "ell"

// 14. Your task is to create a function that does four basic 
// mathematical operations.

// The function should take three arguments - operation(string/char), 
// value1(number), value2(number).
// The function should return result of numbers after applying 
// the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    } else {
        return 'Invalid operation';
    }
}

console.log(basicOp('+', 4, 7));  // 11

// ---------SWITCH statement version--------------------

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 'Invalid operation';
    }
}

// 15. The first century spans from the year 1 up to and including 
// the year 100, the second century - from the year 101 up to and 
// including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

function getCentury(year) {
    return Math.ceil(year / 100);
}

console.log(getCentury(1705));  // 18

// 16. Create a function that takes an integer as an argument and
//  returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(4));  // "Even"

// 17. Create a function which answers the question 
// "Are you playing banjo?".
// If your name starts with the letter "R" or
//  lower case "r", you are playing banjo!

// The function takes a name as its only argument, 
// and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === 'r' ? name + " plays banjo" : name + " does not play banjo";
}

// I made single and double quote on purpose here in order
// to ask You, whether it is correct to use single quote for 
// a character and double for a string? 

console.log(areYouPlayingBanjo('Robert'));    // "Robert plays banjo"

// 18. Write function bmi that calculates body mass index 
// (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bodyMassIndex(weight, height) {
    const bmiValue = weight / Math.pow(height, 2);
    if (bmiValue <= 18.5) {
        return "Underweight";
    } else if (bmiValue <= 25) {
        return "Normal";
    } else if (bmiValue <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

console.log(bodyMassIndex(50, 1.7));  // "Underweight"

// 19. Write a rockPaperScissors  function that returns 1 if the 
// first player won and 2 if the second player won. In case of a draw, 
// return 0.

// rockPaperScissors('rock', 'scissors'); // 1
// rockPaperScissors('rock', 'paper'); // 2
// rockPaperScissors('paper','paper'); // 0

function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return 0; // draw
    }

    if (
        (player1 === 'rock' && player2 === 'scissors') ||
        (player1 === 'scissors' && player2 === 'paper') ||
        (player1 === 'paper' && player2 === 'rock')
    ) {
        return 1; // player1 wins
    } else {
        return 2; // player2 wins
    }
}

console.log(rockPaperScissors('rock', 'scissors'));  // 1

// 20. Create the getCalculationResult function
// it should accept three arguments:
// the first number
// the second number
// the calculation type

// the calculation type should be a string that 
// is either '+', '-', '*', or '/' 

// the function should return the result of the calculation 
// based on the numbers and the type of the calculation

// if the calculation type is not recognized, return null 

// This is the same as the exercise 14

function basicOp(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else if (operation === '*') {
        return value1 * value2;
    } else if (operation === '/') {
        return value1 / value2;
    } else {
        return null;
    }
}

console.log(basicOp('+', 4, 7));  // 11

// 21. Implement the getPercentageValue function
// it should accept two arguments:
// the base number
// the percentage
// the function should return the percentage value based
// on the base number and the percentage

function getPercentageValue(base, percentage) {
    return (base * percentage) / 100;
}

console.log(getPercentageValue(200, 20));

// 22. Implement the getGreaterNumber function
// it should accept two arguments:
// the first number
// the second number
// the function should return the greater of two numbers
// if both of the numbers are the same return null 

function getGreaterNumber(num1, num2) {
    if (num1 === num2) {
        return null;
    }
    return num1 > num2 ? num1 : num2;
}

console.log(getGreaterNumber(10, 20));

// 23. Implement the isOddNumber function
// it should accept one argument: a number
// the function should return true  if the number is odd, 
// and false  if the number is not odd

function isOddNumber(number) {
    return number % 2 !== 0;
}

console.log(isOddNumber(3));

// 24. Implement the isEvenNumber  function
// it should accept one argument: a number
// the function should return true  if the number is even, and false  if the number is not even

function isEvenNumber(number) {
    return number % 2 === 0;
}

console.log(isEvenNumber(3));

// 25. Implement the isDivisible function
// it should accept two arguments:
// the number to be divided
// the number to divide by
// the function should return true  if the dividend is divisible by the divisor, 
// and false  otherwise

function isDivisible(divident, divisor) {
    return divident % divisor === 0;
}
console.log(isDivisible(10, 2));

// 26. Implement the getSmallerNumber function
// it should accept two arguments:
// the first number
// the second number
// the function should return the smaller of two numbers

function getSmallerNumber(num1, num2) {
    return num1 > num2 ? num2 : num1;
}

console.log(getSmallerNumber(10,20));

// 27. Implement the isNumberPositive function
// it should accept one argument: a number
// the function should return true  if the number is positive, and false
//   if the number is not positive

function isNumberPositive(number) {
    return number > 0;
}

console.log(isNumberPositive(10)); 

// 28. Implement the getCelciusConvertedToFahrenheit function
// it should accept one argument: a number
// the function should return the number converted from Celcius to Fahrenheit

function getCelciusConvertedToFahrenheit(tempCelcius) {
    return (tempCelcius * 9/5) + 32;
}
console.log(getCelciusConvertedToFahrenheit(0)); // 32

// 29. Implement the getFahrenheitConvertedToCelcius function
// it should accept one argument: a number
// the function should return the number converted from Fahrenheit to Celcius

function getFahrenheitConvertedToCelsius(tempFahrenheit) {
    return (tempFahrenheit - 32) * 5/9;
}

console.log(getFahrenheitConvertedToCelsius(32)); // 0

// 30. Implement the isLeapYear  function
// it should accept one argument: a number
// the function should return true  if the number represents a leap year, and false otherwise

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); // true (Leap year)

// 31. Implement the getAverageOfThreeNumbers  function
// it should accept three arguments:
// the first number
// the second number
// the third number
// the function should return the average of all provided numbers

function getAverageOfThreeNumbers(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

console.log(getAverageOfThreeNumbers(10, 20, 30)); // 20

// 32. Implement the isNumberNegative function
// it should accept one argument: a number
// the function should return true  if the number is negative, and false  
// if the number is not negative

function isNumberNegative(number) {
    return number < 0;
}
console.log(isNumberNegative(-1));