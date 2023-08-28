const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const displayError = document.getElementById('display-error');

function checkPasswordsMatch() {
    if (password.value !== cpassword.value) {
        displayError.textContent = "* Passwords do not match";
        password.style.borderColor = "red";
        cpassword.style.borderColor = "red";
    } else {
        displayError.textContent = " ";
        password.style.borderColor = "green";
        cpassword.style.borderColor = "green";
    }
}

password.addEventListener('input', checkPasswordsMatch);
cpassword.addEventListener('input', checkPasswordsMatch);