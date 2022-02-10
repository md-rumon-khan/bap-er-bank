const depositButton = document.getElementById('deposit-button');
const depositInput = document.getElementById('deposit-input');
const depositSum = document.getElementById('deposit-sum');
depositButton.addEventListener('click', function () {
    const depositInputValue = depositInput.value;
    depositSum.innerText = depositInputValue;
    depositInput.value = '';

})