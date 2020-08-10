/*******************************************************************************************************
            //1. Ask the user for his name and print in response: "Hello, his name!".
 ******************************************************************************************************/
let name = prompt("plz enter your name");
console.log(`hello ${name} !`);     // I'm trying to use modern Javascript lol
// console.log("hello ", name,"!");

/*******************************************************************************************************
         // 2. Ask the user the year of his birth, count how old he is and print the result. 
                   Indicate the current year in the code as a constant.
 ******************************************************************************************************/
let yearOfBirth = prompt("plz enter  year of birth ");
const currentYear = 2020;
console.log(` you're: ${currentYear-yearOfBirth} years old`   );  //I'm trying to use modern Javascript lol
//console.log("your age is:", count);

/*******************************************************************************************************
 //3. Ask the user for the length of the side of the square and print the perimeter of such a square.
 ******************************************************************************************************/
let sideLength = prompt("plz enter the length of the of the side of the square "); //sideLength
let perimeter = 4 * sideLength;
console.log(`The perimeter of such a square is : ${sideLength*4}`); //I'm trying to use modern Javascript lol
//console.log("The perimeter of such a square is :", perimeter);


/*******************************************************************************************************
    // 4.Ask the user for the radius of the circle and print the area of   such a circle.
 ******************************************************************************************************/
let circlRadius = prompt("plz enter the radius of the circle?"); //circlRadius
const bi = 3.142;                 //math.pi
let area = bi * circlRadius ** 2;
console.log("the area is ", area);

/*******************************************************************************************************
 //5.Ask the user for the distance in km between the two cities and in how many hours they want to get there. 
            Calculate the speed at which you need to move in order to be on time.
 ******************************************************************************************************/

let distance = prompt("plz enter the distance between two cities in Km?");
let hour = prompt("plz enter the time in which you want to reach there?");  //hour
console.log(`The Speed is ${distance/hour} Km/hr`);
// let speed = distance / hour;
// console.log("you will reach there in :", speed, "km/hr");
/*******************************************************************************************************
    //6.Implement a currency converter. The user enters dollars, the program translates into euros. 
                               The exchange rate is stored in a constant.
 ******************************************************************************************************/
let dollarAmount = prompt("plz enter the dollar amount?");
const exchangeRate = 0.874406; // 1$
let euroAmount = dollarAmount * exchangeRate;
console.log(`The ${dollarAmount} Dollar is ${euroAmount} Euro`);

/*******************************************************************************************************
                    //7.The user indicates the amount of flash drive in GB. 
    The program should calculate how many files the size of 820 MB fits on a USB flash drive.
 ******************************************************************************************************/
let flash = prompt("plz enter the GB of your flash?");
flash *= 1000;  //1000 
let file = 820;
console.log(" Your USB can fit into " + Math.floor(flash / file) + "files");

/*******************************************************************************************************
    //8.The user enters the amount of money in the wallet and the price of one chocolate bar. 
    The program displays how many chocolates a user can buy and how much change he will have left.
 ******************************************************************************************************/
let amount = prompt("plz enter the amount of money in your wallet ?");
let barPrice = prompt("plz enter the price you want to buy one chocolate bar?");
let result = amount /barPrice ; //let canBuy = amount/price;
console.log("you can buy", result + "chocolates"); //let exchange = amount -(amount/price);

/*******************************************************************************************************
            //9. Ask the user for a three-digit number and print it backwards. 
            To solve the problem, you need the% operator (remainder of division).
 ******************************************************************************************************/
let numbs =  parseInt(prompt("enter three digit numbers"));
let numb1 = numbs [0];
let numb2 = numbs [1];
let numb3 = numbs [2];

numb1 =numbs % 10;
let rest = Math.floor(numbs / 10);
numb2 = rest %10;
numb3 = Math.floor(numbs / 100);
console.log(`The reverse of these Three digit numbers ${numbs} are: ${numb1} ${numb2} ${numb3}`);

/*******************************************************************************************************
//10.The user enters the deposit amount to the bank for 2 months, with a deposit interest rate of 5% per annum.
                                     Print the amount of accrued interest.
 ******************************************************************************************************/
let depositAmout = prompt("plz enter the deposit amount?");
const interestRate = 0.05; //interest rate as a constnt
let results = (depositAmout*interestRate)/6;
console.log(results);


// *************************************************************************************************************
                                     /*su aasha 9aad ayaadoo User Input ana ahayn*/
// *************************************************************************************************************
// let numbs = 345;
// let numb1 =numbs % 10;
// let rest = Math.floor(numbs / 10);
// let numb2 = rest %10;
// let numb3 = Math.floor(numbs / 100);
// console.log(`The reverse of these Three digit numbers ${numbs} are: ${numb1} ${numb2} ${numb3}`)
// console.log(numb1);
// console.log(numb2);
// console.log(numb3);
// //console.log(rest);
// //console.log(numb1, numb2);

// *************************************************************************************************************
                                     /*saaas na waa loo xali karaa su aasha 9aad*/
// *************************************************************************************************************
// console.log("kala gadis kooda saan lee ahaa!"
//     +prompt("Enter a value").split("").reverse().join("")
// )

// *************************************************************************************************************
                                     /*saaas na waa loo xali karaa su aasha 9aad*/
// *************************************************************************************************************
// // let a = prompt("Enter a three digit value");
// // let z = a;
// // let reverse = 0;
// // while (z > 0) {
// //   let digit = z % 10;
// //   reverse = reverse * 10 + digit;
// //   z = parseInt(z / 10);
// // }
// // console.log("reverse = " + reverse);



