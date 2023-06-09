//  1. Write a program that concatenates two strings and displays the result. Prompt the user to enter two strings and display the concatenated string  

let stringOne = prompt("Hello");
let stringTwo = prompt("Username please");

const concatinatingString = stringOne+stringTwo;
console.log(concatinatingString);  

//  2. Write a program that calculates the average of three numbers. Prompt the user to enter three numbers and display the average 

let userOne = Number(prompt('enter any number 1 to 9'));
let userTwo = Number(prompt('enter any number 99 to 199'));
let userThree = Number(prompt('enter any number 199 to 299'));

const averageNumber = (userOne + userTwo + userThree) / 3 ;

console.log(averageNumber); 

//  3. Write a program that prompts the user to enter a month (1-12) and displays the corresponding season based on the input. For example, if the user enters 3, the program should display "Spring." 

const user = (prompt("Enter a month (1-12):"));
let month;

if (user >= 1 && user <= 2 || user === 12) {
  month = "Winter";
} else if (user >= 3 && user <= 5) {
  month = "Spring";
} else if (user >= 6 && user <= 8) {
  month = "Summer";
} else if (user >= 9 && user <= 11) {
  month = "Fall";
} else {
  month = "Invalid month";
}
console.log("The Season are:", month);

// 4. Write a program that generates and prints all prime numbers between 1 and 100.
function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("Prime Numbers between 1 and 100:");
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}


// 7. Create a function called reverseArray that takes an array as a parameter and returns a new array with the elements in reverse order. 

const colors = ["RED", "BLUE", "GREEN", "AQUA"];


console.log(colors.reverse()); 

//  8. Given an array numbers with the values [1, 2, 3, 4, 5], use a for loop to double each number in the array. Print the modified array. 

const val = [1, 2, 3, 4, 5];

for (let i = 0; i < val.length; i++) {
  val[i] *= 2;
}
console.log("Modified arrays are:", val);

// 9. Write a function named flattenArray that takes a nested array as a parameter and returns a new array with all the elements flattened into a single level.
function flattenArray(nestedArray) {
  return nestedArray.flat();
}

const nestedArray = ['a', ['b', ['c', 'd'], 'e']];
const flattenedArray = flattenArray(nestedArray);
console.log("Flattened Array:", flattenedArray);


// 11. Create an object called "game" with properties for "score" and "updateScore" method that updates the score based on the given points.
const game = {
  score: 0,
  updateScore: function (points) {
    this.score += points;
  },
};

game.updateScore(4);
console.log("Score:", game.score);