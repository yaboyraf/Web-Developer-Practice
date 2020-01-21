// Create an object, with a name, occupation, phone
const person = {
    name: 'Raf',
    occupation: 'failure',
    phone: 'pixel 2 xl',
    returnPhone: function() {
      return this.phone
    },
    money: 5,
    addMoney: function(money) {
      this.money = this.money + money;
    }
  }
  // Console log the object
  console.log(person)
  // Add a method that you call on that object, that returns the phone
  
  // Call the method that returns the phone, and store it into a variable
  const getPhone = person.returnPhone()
  // console log the variable.
  console.log(getPhone)
  
  person.addMoney(5);
  const rafsMoney = person.money;
  console.log('rafs money is: ', rafsMoney) // 10;

  // REFERENCES

  // let myBook = {
//   title: '1984',
//   author: 'George Orwell',
//   pageCount: 326
// }

// let getSummary = function(book) {
//   return {
//     summary: `${book.title} by ${book.author}`
//   }
// }

// console.log(getSummary(myBook))

// let x = 'Raf';
// let y = x; // y = 'Raf'
// y = 'Marielle';
// console.log({ x, y });

let x = {
  name: 'Raf',
  age: 0,
  sayHi: function sayHi() { console.log('hi')},
  sayMyName: function () { console.log(`Hi my name is ${this.name}`)},
};
// let y = x;
// y.name = 'Gerry'; // x.name = 'Gerry'; because y just refers to x
// y.sayHi();
// console.log({ x, y })
console.log(x);