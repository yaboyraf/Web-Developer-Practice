const restaurant = {
    name: "Ramen Nagi",
    sayMyName: function() {
      // console.log(`Hi I'm ${JSON.stringify(this)}`);
      console.log("Hi I'm ", this.name);
    },
    logThis: function() {
      console.log(this);
    },
    test: function() {
      console.log(this.logThis);
    }
  };
  
  // console.log(restaurant);
  restaurant.logThis();
  restaurant.sayMyName();
  restaurant.test();
  
  // function test() {
  //   const x = 1;
  //   console.log(this);
  // }
  
  // test();
  
  function Person(name, main) {
    this.name = name;
    this.main = main;
    this.greet = function() {
      console.log(
        `Hi my name is ${this.name}, and my main in smash is ${this.main}`
      );
    };
  }
  
  
  function createPerson(name, main) {
    return {
      greet: function() {
        console.log(`Hi my name is ${name}, and I main ${main}`);
      }
    };
  }
  
  const Julian = createPerson("Julian", "Zero Suit");
  Julian.greet();
  const Alex = createPerson("Alex", "Falco");
  Alex.greet();
  const Raf = new Person("Raf", "Palu");
  const Gerry = new Person("Gerry", "Cloud");
  
  console.log(Raf);
  Raf.greet();
  
  const car = {
    brand: 'Honda',
    model: 'Civic',
    year: 2016,
    saySomething: function() {
      console.log(`I am a ${this.year} ${this.brand} ${this.model}`)
    }
  }
  
  car.saySomething()
  
  const Car = function(brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
    this.saySomething = function(){
      console.log(`I am a ${this.year} ${this.brand} ${this.model}`)
    }
  }
  
  const lexus = new Car('Lexus', 'IS200t', 2019)
  lexus.saySomething()
  const toyota = new Car('Toyota', 'AE86', 1986)
  toyota.saySomething()
  
  const Van = function(brand, model, year) {
    const obj = {
      brand: brand,
      model: model,
      year: year,
      saySomething: function() {
        console.log(`Hi I'm a, ${this.brand} ${this.model} ${this.year}`);
      },
    };
    return obj;
  }
  
  const van = Van('Honda', 'Pilot', 2016);
  console.log(van);
  van.saySomething();