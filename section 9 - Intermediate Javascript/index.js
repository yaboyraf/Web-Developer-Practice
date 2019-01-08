// prompt("What is your name?");
// prompt("What is their name?");

// var loveScore = Math.random();
// loveScore = loveScore * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//     console.log(`Your Love Score is: ${loveScore}%! Don't be shy!`);
// } else if (loveScore > 30 && loveScore <= 70) {
//     console.log(`Your Love Score is: ${loveScore}%! That's pretty good!`);
// } else if (loveScore <= 30) {
//     console.log(`Your Love Score is ${loveScore}%. There's plenty of fish in the sea`);
// };

//----prototypes----//
// const Person = function(name) {
//   this.name = name;
// }

// Person.prototype.sayName = function() {
//   console.log(this.name);
// }
// const person1 = new Person('Raf');
// person1.sayName();
// // console.log(person1.name);

// const arr = new Array(1,2,3);
// console.log(Array._prototype_)
// console.log(arr.__prototype__);

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     sayName() {
//       console.log(this.name);
//     }
//   }
  
//   class Student extends Person {
//     constructor(school, name) {
//       super(name);
//       this.name = name;
//       this.school = school;
//     }
//   }
  
//   const person1 = new Student('SJSU', 'Raf');
//   person1.sayName();
//   console.log(person1);
//   // console.log(person1.name);

//----arrays----//
// var guestList = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason'];

// var guestName = prompt('What is your name?');

// if (guestList.includes(guestName)) {
//     alert(`welcome!`);
// } else {
//     alert(`You are not invited. Please leave`);
// }

// var output = [];
// var count = 1;

//-----Arrays-----//
// var output = [];

// function fizzBuzz() {

//     for (var count = 1; count < 100; count++) {
//         if (count % 3 === 0 && count % 5 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");
//         } else if (count % 5 === 0) {
//             output.push("Buzz");
//         } else {
//             output.push(count);
//         }
//     }
//     console.log(output);
// };

//-----beer bottle song exercise-----//

let beerBottles = 99;

while (beerBottles >= 1) {
    let bottleWord = "bottles";
    if (beerBottles === 1) {
        bottleWord = "bottle";
    } 
    console.log(`${beerBottles} ${bottleWord} of beer on the wall, ${beerBottles} ${bottleWord} of beer.`);
    console.log(`Take one down, pass it around,`);
    beerBottles--;
    console.log(`${beerBottles} ${bottleWord} of beer on the wall.`);
};


