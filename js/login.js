// Bank login form
document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userEmailValue = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const userPasswordValue = userPassword.value;
    if (userEmailValue == 'khan@rumon.com' && userPasswordValue == 'khan') {
        window.location.href = 'newpage.html';
    }
    else {
        alert('Please enter  the valid number!!!')
    }
});