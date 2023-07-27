//

// /////////////////////////////
// ternary operator :

// const age = 16;
// age >= 18
//   ? console.log("you are an adult person !")
//   : console.log("you are not an adult person !");

// ternary ooperator return a value which can be stored also in a variable
const age = 16;

// using ternary operator:
const drink = age >= 18 ? "wine!" : "water";
console.log(drink);

// using if else

// let drink2 ;
// if(age>=18){
//     drink2 = "wine"
// }else{
//     drink2 = "water"
// }
// console.log("drink");

/* note if-else is a statement so can not be assinged as a value 

*/
// console.log(`i want to drink ${if(age>=18){
//     drink2 = "wine"
// }else{
//     drink2 = "water"
// }}`);

// but since ternary operator produce a value so it is an expression so it can be assined to something as value. in a placeholder ${}
// console.log(`I want to drink ${age >= 18 ? "wine!" : "water!"}`);

// /////////////////////////////////////////////////////////////

// challenge : bill + tip calculator
// The bill was 275, the tip was 41.25, and the total value 316.25.

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${
  bill + tip
}.
`);
