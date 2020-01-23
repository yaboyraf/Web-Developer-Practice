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
  