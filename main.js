// Calculate button functionalities for showing total expense and balance
document.getElementById('calculate-btn').addEventListener('click', function() {
    document.getElementById('balance').innerText = initialBalance();
    document.getElementById('total-expenses').innerText = getTotalExpenses();
})

// Saving button functionality
document.getElementById('saving-btn').addEventListener('click', function() {
    const savingAmount = saving(initialBalance());
    const remainingBalance = balanceAfterSaving();
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaining-balance').innerText = remainingBalance;
})

// Function for getting income amount
function getIncome() {
    incomeValue = document.getElementById('income').value;
    return parseFloat(positiveOnly('income', incomeValue));
}


// Function for getting expense amount
function getTotalExpenses() {
    const foodExpense = parseFloat(positiveOnly('food', document.getElementById('food').value));
    const rentExpense = parseFloat(positiveOnly('rent', document.getElementById('rent').value));
    const clothExpense = parseFloat(positiveOnly('cloths', document.getElementById('cloths').value));
    const totalExpenses = addExpenses(foodExpense, rentExpense, clothExpense);
    if (!isNaN(totalExpenses) && totalExpenses >= 0) {
        document.getElementById('saving-btn').disabled = false;
        return totalExpenses;
    } else {
        //Wrong Inputs in Income and Expenses field will make the save button disabled
        const savingBtn = document.getElementById('saving-btn');
        savingBtn.style.backgroundColor = 'gray';
        savingBtn.disabled = true;
        return document.getElementById('total-expenses').innerText = '0';
    }

}

//Function for adding three numbers
function addExpenses(num1, num2, num3) {
    return num1 + num2 + num3;
}

//Function for savings
function saving(income) {
    const rate = parseFloat(positiveOnly('saving-input', document.getElementById('saving-input').value));
    const total = income * (rate / 100);
    if (!isNaN(total)) {
        if (total <= initialBalance()) {
            return total;
        } else {
            return document.getElementById('saving-amount').innerText = 'Insufficient Balance';
        }

    } else {
        return document.getElementById('saving-amount').innerText = '0';
    }

}



//Initial Balance Function
function initialBalance() {
    const incomeValue = getIncome();
    const totalExpenses = getTotalExpenses();
    const initialBalance = incomeValue - totalExpenses;
    if (initialBalance >= 0) {
        return initialBalance;
    } else {
        // return document.getElementById('balance').innerText = '0';
        const msg = document.getElementById('balance').style.color = 'red';
        return msg.innerText = 'Insufficient Income';
    }
}

//After Saving Balance Function
function balanceAfterSaving() {
    const remainingBal = initialBalance() - saving(initialBalance());
    if (!isNaN(remainingBal)) {
        if (remainingBal < 0) {
            const msg = document.getElementById('remaining-balance').style.color = 'red';
            return msg.innerText = 'Insufficient Balance';

        } else {
            return remainingBal;
        }

    } else {
        return document.getElementById('remaining-balance').innerText = '0';
    }
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