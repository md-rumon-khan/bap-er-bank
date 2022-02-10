




// const userEmail = document.getElementById('user-email');
// const userPassword = document.getElementById('user-password');
// const loginButton = document.getElementById('login-button');

// const userEmailValue = userEmail.value;
// const userPasswordValue = userPassword.value;

// loginButton.addEventListener('click', function () {
//     if (userEmailValue == 'mdrumonkhan48519@gmail.com' && userPasswordValue == 'khan143') {
//         window.location.href = 'newpage.html';
//     }
// });



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