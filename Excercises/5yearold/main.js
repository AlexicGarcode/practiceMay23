/* const age = prompt("What is your age?");

if (age < 18) {
    alert("You are not allowed to be here")
} else{
    alert("You are " + age + " years old!");
    console.log("You are " + age + " years old!");
} */


/*Write a program that prompts the user to enter two numbers 
and then displays the sum of those numbers.*/ 

/* let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let sum = num1 + num2;

alert("The sum of those numbers is " + sum) */

//---------------------------------------------------------------------->

/* Write a program that generates a random number between 1 and 10 
and asks the user to guess the number. The program should provide 
feedback on whether the guess is too high, too low, or correct. */

/* let randomNumber = Math.floor(Math.random() *10 + 1);
    console.log(randomNumber);

let guess = prompt("Guess a number between 1 and 10");

guess = parseInt(guess);

if (guess === randomNumber){
    alert("Congratulations! You guessed the correct number");
} else if(guess < randomNumber){
    alert("Too low! Try guessing a higher number.");
} else {
    alert("Too high! Try guessing a lower number");
} */

//---------------------------------------------------------------------->

//Create an array of numbers.
//Write a function that squares each number in the array using an arrow function.
//Print the squared numbers to the console.

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squareNumbers = (array) => {
    return array.map((number => number ** 2))
}

console.log(squareNumbers(numbers)); */

//---------------------------------------------------------------------->

const string = "Hello World!";
const reversedString = string.split("").reverse().join("");
console.log(reversedString);