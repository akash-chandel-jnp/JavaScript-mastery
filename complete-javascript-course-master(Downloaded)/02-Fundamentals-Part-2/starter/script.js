// //function declaration
// //in function declaration we first declare a function
// function square_a_num(num) {
//   return num ** 2;
// }
// //we can call a declared function even before it is declared
// console.log(square_a_num(10));

// //////////////////////////////////////////////////////////
// // function expression
// const squared1 = function (num1) {
//   return num1 ** 2;
// };

// console.log(squared1(20));

// //but in function expression you can not call the function before it is declared.

// ///////////////////////////
// // arrow function
// // parameter => return operation_on_parameter
// const squaring_num = (num) => num ** 2;
// console.log(squaring_num(50));
// // so we can see no need to write return keyword or function keyword..

// // but if we have complex calculaion to do first and then return something then we should do like below :

// // example 1
// const canApplyForlicese = (birth_year) => {
//   const age = 2023 - birth_year;
//   if (age >= 18) {
//     return `You can have license.`;
//   } else {
//     return `You have to wait for ${18 - age} year to apply for license.`;
//   }
// };

// console.log(canApplyForlicese(1995));

// // example2
// const years_remaining_in_retirement = (birth_year) => {
//   const age = 2023 - birth_year;
//   return 60 - age;
// };

// console.log(years_remaining_in_retirement(1985));

// // note if we have multiple calcution etc before returning something then we have to exlicitly write the return keyword.

// // IF WE HAD MULTIPLE PARAMETER:
// // example2
// const years_remaining_in_retirement1 = (birth_year, name) => {
//   const age = 2023 - birth_year;
//   return `Mr. ${name} , you will retire after ${60 - age} years.`;
// };
// console.log(years_remaining_in_retirement1(1990, "Akash"));

//////////////////////////////////////////////////////////////////////////////
// Function calling another function:
// let say we want to  double a number and then find the square of that double , we want to create two dinstinct function for these two steps , first one will call the second function to double the number and return it back to first and first one will make square of it.

// function first(num) {
//   const double_num = second(num);
//   return double_num ** 2;
// }

// function second(num) {
//   return 2 * num;
// }

// console.log(first(5));

// ////////////////////////////////////
/* Write your code below. Good luck! 🙂 */
// const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins..`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// /////////////////////////////////////////////
// objects

// const Pratap = {
//   fName: "pratap",
//   lName: "singh",
//   age: "35",
//   adress: "New Delhi",
// };
// console.log(Pratap.fName); // dot notation
// console.log(Pratap["fName"]); // bracket notation

//////////////////////////////////////////////////////////////////////////////////
// coding challenge 3 : BMI calculator:
/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: "1.69",
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: "1.95",
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };
// console.log(mark.calcBMI(), john.calcBMI());

// const winner = function (bmi1, bmi2) {
//   if (bmi1 > bmi2) {
//     console.log(`Mark (${bmi1} vs ${bmi2})`);
//   } else if (bmi2 > bmi1) {
//     console.log(`John (${bmi2} vs ${bmi1})`);
//   }
// };
// winner(mark.calcBMI(), john.calcBMI());

/////////////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE
// using bill[] data find out the tip and total and insert into the corresponding arrays ;
const bill = [2, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];

// const calcTip = function (bill) {
//   if (bill > 300) {
//     return bill * 0.2;
//   } else {
//     return bill * 0.15;
//   }
// };

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // ternary operator
};

for (let i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
  total.push(bill[i] + tip[i]);
}

console.log(bill, tip, total);

// ////////////////////////////////////////////////
