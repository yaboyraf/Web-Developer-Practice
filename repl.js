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