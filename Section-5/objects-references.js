let myAccount = {
    name: "Raf",
    expenses: 0,
    income: 0
  };
  
  let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account);
  };
  
  // addIncome
  let addIncome = function(account, income) {
    account.income = account.income + income
  }
  // resetAccount
  let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
  }

  // getAccountSummary
  let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `The account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
  }
  
  addIncome(myAccount, 2000)
  addExpense(myAccount, 500)
  addExpense(myAccount, 100)
  console.log(getAccountSummary(myAccount))
  resetAccount(myAccount)
  console.log(getAccountSummary(myAccount))
  // addIncome
  // addExpense
  // getAccountSummary
  // resetAccount
  // getAccountSummary
  

  // const name = "Gerry";
  // //  3x101010
  // function logName(namePassedIn) {
  //   const testing = "Gerry";
  //   // 2x101010
  //   console.log("is name same: ", namePassedIn === testing);
  // }
  
  // logName(name);
  
  // const person = { name: "Gerry" };
  
  // function logPerson(personPassedIn) {
  //   const testing = { name: "Gerry" };
  //   console.log("is object same: ", personPassedIn === testing);
  // }
  
  // logPerson(person);
  
  // { name: 'Gerry' } === { name: 'Gerry' } --> not true because different references
  //    0x101010              1x101010
  
  /*
    For functions, when you pass in an object as an argument, you are passing in a reference to the object.
    But when you pass in a primitive (number/string/boolean), you are passing in the value.
  */
  
  // let currentNotes = [];
  // console.log("my notes before I add anything is empty, here: ", currentNotes);
  // function addNote(note) {
  //   currentNotes = [...currentNotes, note];
  // }
  
  // addNote("I need to study and practice references");
  
  // console.log("my notes are now: ", currentNotes);
