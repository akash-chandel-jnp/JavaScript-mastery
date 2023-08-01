'use strict';
// // console.log(student.calcAge(2023));
// const student = {
//   fName: 'Akash',
//   lName: 'Chandel',
//   job: 'programmer',
//   year: 1985,

//   calcAge: function (currYear) {
//     return currYear - Number(this.year); // this keyword belong to the object and is used when some property of the object is accessed.
//   },
// };

// console.log(student.calcAge(2023));

////////////////////////////////////////////////////////////////////////////////////////
function doubleAge() {
  const birth_year = 1985;
  // this is undefined for a normal function call which is not part of object(in case of strict mode) but in sloppy mode it points to the window object .
  //   return 2 * (2030 - this.doubleAge.birth_year);
  console.log(this);
}
console.log(window.doubleAge.birth_year);
console.log(doubleAge());
