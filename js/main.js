// DECLARING VARIABLES
const submitButton = document.querySelector('#submit-button');
const fullNameInput = document.querySelector('#fullname');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Declare variable that will store regular expression for email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
function handleFormValidation() {
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
    const data = {};
    const errors = []; //
    const errorsObj = {}; // 

    // FULL NAME
    const fullname = fullNameInput.value.trim();
    if (fullname !== '') {
        data.fullname = fullname;
    } else {
        const msg = 'Full name is missing';
        errors.push(msg);
        errorsObj.fn = msg;
    }

    // EMAIL
    const email = emailInput.value.trim();
    if (email !== '') {
        if (emailRegex.test(email)) {
            data.email = email;
        } else {
            const msg = 'Email is not valid';
            errors.push(msg);
            errorsObj.em = msg;
        }
    } else {
        const msg = 'Email is missing';
        errors.push(msg);
        errorsObj.em = msg;
    }

    // MESSAGE
    const message = messageInput.value.trim();
    if (message !== '') {
        data.message = message;
    } else {
        const msg = 'Message is missing';
        errors.push(msg);
        errorsObj.msg = msg;
    }

    // FEEDBACK/ERRORS
    if (errors.length > 0) {
        console.log('ERRORS', errorsObj);
    } else {
        console.log('COLLECTED DATA', data);

        // Clear text-fields
        fullNameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}

// Register your form to "click" event.
submitButton.addEventListener('click', handleFormValidation);
