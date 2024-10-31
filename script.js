const form = document.getElementById('form');

const firstName = document.getElementById('first-name');
const firstWarn = document.getElementById('fName');


const lastName = document.getElementById('last-name');
const lastWarn = document.getElementById('lName');

const email = document.getElementById('email-address');
const emailWarn = document.getElementById('eName');

const password = document.getElementById('password');
const passwdWarn = document.getElementById('pName');

const submit = document.getElementById('submit-btn');
const success = document.querySelector('.register');

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const namePattern = /^[^0-9]*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    if(!firstName.value || !namePattern.test(firstName.value)){
        firstWarn.style.display = 'block';
        firstName.style.backgroundImage = "url('images/icon-error.svg')";
        isValid = false;
    } else{
        firstWarn.style.display = 'none';
        firstName.style.backgroundImage = "none";
    }

    if(!lastName.value || !namePattern.test(lastName.value)){
        lastWarn.style.display = 'block';
        lastName.style.backgroundImage = "url('images/icon-error.svg')";
        isValid = false;
    } else{
        lastWarn.style.display = 'none';
        lastName.style.backgroundImage = "none";
    }
    
    if(!emailPattern.test(email.value)){
        emailWarn.style.display = 'block';
        email.style.backgroundImage = "url('images/icon-error.svg')";
        isValid = false;
    } else{
        emailWarn.style.display = 'none';
        email.style.backgroundImage = "none";
    }

    if(!password.value || password.value.length < 6){
        passwdWarn.style.display = 'block';
        password.style.backgroundImage = "url('images/icon-error.svg')";
        isValid = false;
    } else{
        passwdWarn.style.display = 'none';
        password.style.backgroundImage = "none";
    }

    if(isValid){
        success.style.display = 'block';
    } else{
        success.style.display = 'none';
    }
})
