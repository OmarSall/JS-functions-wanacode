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
