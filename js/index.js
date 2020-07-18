// //1. Ask the user for his name and print in response: "Hello, his name!".
let name = prompt("plz enter your name");
console.log("hello ", name);

// // 2. Ask the user the year of his birth, count how old he is and print the result. Indicate the current year in the code as a constant.
let age = prompt("plz enter your birth day only a year");
let currentYear = 2020;
let count = currentYear - age;
console.log("your age is:", count);

// //3. Ask the user for the length of the side of the square and print the perimeter of such a square.
let length = prompt("plz enter the length of the of the side of the square ");
let perimeter = 4 * length;
console.log("The perimeter of such a square is :", perimeter);

// // 4.Ask the user for the radius of the circle and print the area of   such a circle.
let radius = prompt("plz enter the radius of the circle?");
bi = 3.142;
let area = bi * radius ** 2;
console.log("the area is ", area);

// //5. Ask the user for the distance in km between the two cities and in how many hours they want to get there. Calculate the speed at which you need to move in order to be on time.
let distance = prompt("plz enter the distance between two cities in Km?");
let time = prompt("plz enter the time in which you want to reach there?");
let speed = distance / time;
console.log("you will reach there in :", speed, "km/hr");

// //6.Implement a currency converter. The user enters dollars, the program translates into euros. The exchange rate is stored in a constant.
let dollar = prompt("plz enter the dollar amount?");
let rate = 0.874406; // 1$
let euro = dollar * rate;
console.log(dollar, "dollar: = ", euro);

//7.The user indicates the amount of flash drive in GB. The program should calculate how many files the size of 820 MB fits on a USB flash drive.
let flash = prompt("plz enter the GB of your flash?");
flash *= 1024;
let file = 820;
console.log(Math.floor(flash / file) + "files");

//8.The user enters the amount of money in the wallet and the price of one chocolate bar. The program displays how many chocolates a user can buy and how much change he will have left.
let amount = prompt("plz enter the amount of money in your wallet ?");
let price = prompt("plz enter the price you want to buy one chocolate bar?");
let result = amount / price;
console.log("you can buy", result + "chocolates");

//9. Ask the user for a three-digit number and print it backwards. To solve the problem, you need the% operator (remainder of division).

// console.log(
//     +prompt("Enter a value").split("").reverse().join("")
// )

//9 Ask the user for a three-digit number and print it backwards. To solve the problem, you need the% operator (remainder of division).

let a = prompt("Enter a three digit value");
let z = a;
let reverse = 0;
while (z > 0) {
  let digit = z % 10;
  reverse = reverse * 10 + digit;
  z = parseInt(z / 10);
}
console.log("reverse = " + reverse);

//10.The user enters the deposit amount to the bank for 2 months, with a deposit interest rate of 5% per annum. Print the amount of accrued interest.
let p = prompt("plz enter the deposit amount?"); //principle
const i = 0.05; //interest rate
let n = 2; //time period
interestAmount = p * i * n;
console.log(interestAmount);
