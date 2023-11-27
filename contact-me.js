// TODO
const form = document.getElementById('contact-me');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const select = document.getElementById('contact-kind');
const job = document.getElementById('job');
const jobTitle = document.getElementById('job-title');
const code = document.getElementById('code');
const companyUrl = document.getElementById('company-url');
let valid = false;

// toggles display based on what is selected in drop down
const selectHandler = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue == 'job') {
        job.classList.remove('hidden');
        code.classList.add('hidden');
    } else if (selectedValue == 'code') {
        code.classList.remove('hidden');
        job.classList.add('hidden');
    }
}

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

// validate URL with regex
const validUrl = (urlInput) => {
    const myRegex = /\w+@\w+\.\w+/;
    if (myRegex.test(urlInput.value.trim())) {
        urlInput.parentElement.classList.remove('invalid');
        return true;
    } else {
        urlInput.parentElement.classList.add('invalid');
        return false;
    }
}

form.addEventListener('change', (e) => {
    selectHandler(select);
});

form.addEventListener('submit', (e) => {

    let nameLengthValidated = validLength(fullName, 3);
    let emailValidated = validEmail(email);
    let messageValidated = validLength(message, 10);
    // let selectedValueValid = true;
    // let jobTitlePresent = true;

    // if (selectedValueValid == 'job'){
    //     selectedValueValid = validUrl(companyUrl);
    //     jobTitlePresent = validLength(jobTitle, 1);
    // }

    if (nameLengthValidated && emailValidated && messageValidated) {
        console.log('Successfully submitted form, yay!');
    } else {
        console.log('Bad input, form not submitted');
        e.preventDefault();
    }
});