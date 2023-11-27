// TODO

const form = document.getElementById('connect-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const os = document.getElementById('operating-system');
const employees = document.getElementById('num-of-employees');
const select = document.getElementById('contact-kind');
let valid = false;

// check if input is a valid length
const validLength = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove('invalid');
        return true;
    } else {
        input.parentElement.classList.add('invalid');
        return false;
    }
}

// validate email with regex
const validEmail = (emailInput) => {
    const myRegex = /\w+@\w+\.\w+/;
    if (myRegex.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.remove('invalid');
        return true;
    } else {
        emailInput.parentElement.classList.add('invalid');
        return false;
    }
}

const selectHandler = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue == 'business') {
        employees.parentElement.classList.remove('hidden');
        os.parentElement.classList.add('hidden');
    } else if (selectedValue == 'technical') {
        os.parentElement.classList.remove('hidden');
        employees.parentElement.classList.add('hidden');
    }
}

form.addEventListener('change', (e) => {
    selectHandler(select);
});

form.addEventListener('submit', (e) => {

    let firstLengthValidated = validLength(firstName, 3);
    let lastLengthValidated = validLength(lastName, 3);
    let emailValidated = validEmail(email);

    if (firstLengthValidated && lastLengthValidated && emailValidated) {
        valid = true;
        console.log('Successfully submitted form, yay!');
    } else {
        valid = false;
        console.log('Bad input');
        e.preventDefault();
    }
});