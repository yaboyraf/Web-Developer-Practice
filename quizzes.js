let car1 = {
    make: "Honda",
    model: "Civic",
    year: 1999,
    color: 'blue',
  }
  
  let car2 = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2001,
    color: 'red',
  };
  
  
  // Create a function that takes in car as the input
  
  function newCar (car) {
    return car.make
  }
  
  // Create a function, that takes in car as input
  // return a new object, with the car's name, and a summary property, sumarry property should read "This ${make} ${model} was made in ${2001}"
  
  let summary = function(car) {
    return {
      make: car.make,
      summary: `This ${car.make} ${car.model} was made in ${car.year}`
    }
  }
  
  //console.log(newCar(car))
  
  console.log(summary(car1))
  console.log(summary(car2))


  //STRING FUNCTIONS QUIZ
  /*
  1) Write a function that takes in a string as input
  have the function return the string but lowercased

  2) Write a function that takes in 2 strings, string1, and string2, return either of the two strings
  
  "Yes string 2 can be found in string 1"

  or
  
  "No string 2 cannot be found inside string 1"

  3) Write a function that takes in 1 input string, and returns the string
  
  "The length if the string you passed in is {LENGTH}"

  4) Write a function that takes in a string, determine if it is a valid string.

  Conditons for being valid
  a. If it is greater than length 8.
  b. If it contains the character "@".

  should return either
  
  "the password is valid"
  or
  "the password is invalid"
*/

//1)
let lowerCase = function(string) {
  return string.toLowerCase()
}

// console.log(lowerCase("HELLO"))

//2)
let compareStrings = function(string1, string2) {
  if (string1.includes(string2)){
    return `Yes ${string2} can be found in ${string1}`
  } else {
    return `No string 2 cannot be found inside string 1`
  }
}

// console.log(compareStrings("hello", "llo"))

//3) 
let stringLength = function(string) {
  let stringLength = string.length
  return `The length of the string you passed in is ${stringLength}`
}

// console.log(stringLength("hi troy"))

//4)
let validPassword = function(password) {
  if (password.length > 8 && password.includes('@')) {
    return "The password is valid"
  } else {
    return "The password is invalid"
  }
}

console.log(validPassword("12345678@"))