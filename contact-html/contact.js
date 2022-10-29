var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var ageError = document.getElementById('age-error');
var passwordError = document.getElementById('password-error');
var repasswordError = document.getElementById('repasswod-error');
var submitError = document.getElementById('submit-error');

function validName() {
    var name = document.getElementById('contact-name').value;

    if (name.lengh == 0) {
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if (!name.match(/[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = 'Valid'
    return true;
}

function validEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.lengh == 0) {
        emailError.innerHTML = 'Write Valid Email';
        return false;
    }
    if (!email.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)) {
        emailError.innerHTML = 'Write email';
        return false;
    }
    emailError.innerHTML = 'Valid'
    return true;
}


function validPhone() {
    var phone = document.getElementById('contact-Phone').value;

    if (phone.lengh == 0) {
        phoneError.innerHTML = 'phone is Required';
        return false;
    }
    if (phone.lengh !== 11) {
        phoneError.innerHTML = 'phone num should be 11 Digates';
        return false;
    }
    if (phone.match(/^(002)?01[0125][0-9]{8}/)) {
        phoneError.innerHTML = 'Write Full Num';
        return true;
    }
    phoneError.innerHTML = 'valid'
    return true;
}

function validAge() {
    var age = document.getElementById('contact-Age').value;

    if (age.lengh == 0) {
        ageError.innerHTML = 'Age is Required';
        return false;
    }

    if (!age.match(/^\S[0-9]{0,2}$/)) {
        ageError.innerHTML = 'Write valid Age';
        return false;
    }
    ageError.innerHTML = 'valid'
    return true;
}

function validPassword() {
    var password = document.getElementById('contact-Password').value;

    if (password.lengh == 0) {
        passwordError.innerHTML = 'password is Required';
        return false;
    }

    if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        passwordError.innerHTML = 'Write valid password';
        return false;
    }
    passwordError.innerHTML = 'valid'
    return true;
}

function validRepassword() {
    var repassword = document.getElementById('contact-Repassword').value;

    if (repassword.lengh == 0) {
        passwordError.innerHTML = 'repassword is Required';
        return false;
    }

    if (repassword === password) {
        repasswordError.innerHTML = 'Write Same password';
        return false;
    }
    repasswordError.innerHTML = '<i class="fa-solid fa-circle-check"></i> '
    return true;
}

function validateForm() {
    if (!validName() || !validEmail() || !validPhone() || !validAge() || !validPassword() || !validRepassword) {
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix Error to submit'
        setTimeout(function () { submitError.style.direction = 'none'; }, 3000)
        return false
    }

}