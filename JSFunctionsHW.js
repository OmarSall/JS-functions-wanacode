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
