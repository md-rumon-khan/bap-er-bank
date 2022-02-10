
const depositButton = document.getElementById('deposit-button');
const depositInput = document.getElementById('deposit-input');
const depositValue = document.getElementById('deposit');
const blance = document.getElementById('blance');
const withdraw = document.getElementById('withdraw');
const withdrawButton = document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input');

// Deposit value setting 
depositButton.addEventListener('click', function () {
    const depositInputValue = depositInput.value;
    const newDepositInputSum = parseFloat(depositInputValue);
    const depositValueText = depositValue.innerText;
    const depositSum = parseFloat(depositValueText);
    if (depositInput.value == '') {
        alert("Please enter a valid number!!!")
    }
    depositValue.innerText = depositSum + newDepositInputSum;
    const oldestBlance = parseFloat(blance.innerText);
    blance.innerText = oldestBlance + newDepositInputSum;
    depositInput.value = '';
});

withdrawButton.addEventListener('click', function () {
    const withdrawText = parseFloat(withdraw.innerText);
    const MyBlance = parseFloat(blance.innerText);
    const withdrawInputValue = parseFloat(withdrawInput.value);
    withdraw.innerText = withdrawText + withdrawInputValue;
    blance.innerText = MyBlance - withdrawInputValue;
    withdrawInput.value = '';
});