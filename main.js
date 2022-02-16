// Calculate button functionalities for showing total expense and balance
document.getElementById('calculate-btn').addEventListener('click', function() {
    document.getElementById('balance').innerText = initialBalance();
    document.getElementById('total-expenses').innerText = getTotalExpenses();
})

// Saving button functionality
document.getElementById('saving-btn').addEventListener('click', function() {
    const savingAmount = saving(getIncome());
    const remainingBalance = balanceAfterSaving();
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
})

// Function for getting income amount
function getIncome() {
    return parseFloat(document.getElementById('income').value);
}


// Function for getting expense amount
function getTotalExpenses() {
    const foodExpense = parseFloat(document.getElementById('food').value);
    const rentExpense = parseFloat(document.getElementById('rent').value);
    const clothExpense = parseFloat(document.getElementById('cloths').value);
    return addExpenses(foodExpense, rentExpense, clothExpense);

}

//Function for adding three numbers
function addExpenses(num1, num2, num3) {
    return num1 + num2 + num3;
}

//Function for savings
function saving(income) {
    const rate = parseFloat(document.getElementById('saving-input').value);
    return income * (rate / 100);
}



//Initial Balance Function
function initialBalance() {
    const incomeValue = getIncome();
    const totalExpenses = getTotalExpenses();
    return incomeValue - totalExpenses;
}

//After Saving Balance Function
function balanceAfterSaving() {
    const incomeValue = getIncome();
    const expenseValue = getTotalExpenses();
    return incomeValue - expenseValue - saving(incomeValue);
}