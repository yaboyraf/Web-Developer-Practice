const account = {
    name: 'Raf',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function(expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${accountBalance}, $${totalIncome} in income, and $${totalExpenses} in expenses`
    }
}

account.addExpense('Rent', 900)
account.addExpense('Turntable', 400)
account.addIncome('Job', 1800)
console.log(account.getAccountSummary())