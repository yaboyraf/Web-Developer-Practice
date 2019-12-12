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
  
  // resetAccount
  
  addExpense(myAccount, 2.5);
  
  // let addExpense = function(amount) {
  //   myAccount.expenses = myAccount.expenses + amount;
  // };
  
  // addExpense(2.5);
  console.log(myAccount);
  
  // let myAccount = {
  //   name: "Raf",
  //   income: 5
  // };
  
  // function logIncome(account) {
  //   console.log("account is: ", account);
  // };
  
  // logIncome(2);
  
  // let myAccount = {
  //   name: "Raf",
  //   expenses: 0,
  //   income: 0
  // };
  
  // let addExpense = function(account, expense) {
  //   const addedExpenses = account.expenses + expense;
  //   return {
  //     name: account.name,
  //     expenses: addedExpenses,
  //     income: account.income
  //   };
  // };
  
  // const newAccount = addExpense(myAccount, 5);
  // console.log("newAccount is: ", newAccount);
  // console.log("old account is: ", myAccount);
  
  const name = "Gerry";
  //  3x101010
  function logName(namePassedIn) {
    const testing = "Gerry";
    // 2x101010
    console.log("is name same: ", namePassedIn === testing);
  }
  
  logName(name);
  
  const person = { name: "Gerry" };
  
  function logPerson(personPassedIn) {
    const testing = { name: "Gerry" };
    console.log("is object same: ", personPassedIn === testing);
  }
  
  logPerson(person);
  
  // { name: 'Gerry' } === { name: 'Gerry' } --> not true because different references
  //    0x101010              1x101010
  
  /*
    For functions, when you pass in an object as an argument, you are passing in a reference to the object.
    But when you pass in a primitive (number/string/boolean), you are passing in the value.
  */
  
  let currentNotes = [];
  console.log("my notes before I add anything is empty, here: ", currentNotes);
  function addNote(note) {
    currentNotes = [...currentNotes, note];
  }
  
  addNote("I need to study and practice references");
  
  console.log("my notes are now: ", currentNotes);

  //