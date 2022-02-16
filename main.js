// Function for calculating Total Expenses and Balance
document.getElementById('calculate-btn').addEventListener('click', function() {
    const incomeValue = getIncome();
    const totalExpenses = getTotalExpenses();
    const initialBalance = incomeValue - totalExpenses;
    document.getElementById('balance').innerText = initialBalance;
    document.getElementById('total-expenses').innerText = totalExpenses;
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

function addExpenses(num1, num2, num3) {
    return num1 + num2 + num3;
}