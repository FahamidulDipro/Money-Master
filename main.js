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
    incomeValue = parseFloat(document.getElementById('income').value);
    return positiveOnly('income', incomeValue);
}


// Function for getting expense amount
function getTotalExpenses() {
    const foodExpense = positiveOnly('food', parseFloat(document.getElementById('food').value));
    const rentExpense = positiveOnly('rent', parseFloat(document.getElementById('rent').value));
    const clothExpense = positiveOnly('cloths', parseFloat(document.getElementById('cloths').value));
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


//positive only
function positiveOnly(name, num) {
    if (!isNaN(num) && num >= 0) {
        document.getElementById(name + '-err').classList.add('hidden');
        document.getElementById(name + '-err').classList.remove('block');
        document.getElementById('total-expenses').classList.remove('hidden');
        document.getElementById('balance').classList.remove('hidden');
        return num;

    } else {
        document.getElementById(name + '-err').classList.add('block');
        document.getElementById(name + '-err').classList.remove('hidden');
        document.getElementById('total-expenses').classList.add('hidden');
        document.getElementById('balance').classList.add('hidden');
    }
}


//Refreshing will set 0
window.onload = function() {
    document.getElementById('income').value = '0';
    document.getElementById('food').value = '0';
    document.getElementById('rent').value = '0';
    document.getElementById('cloths').value = '0';
    document.getElementById('saving-input').value = '0';
}