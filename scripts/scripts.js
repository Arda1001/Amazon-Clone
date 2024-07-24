function validateEmailField(fieldId, errorId) {
    return new Promise((resolve) => {
        const email = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (email === '') {
            errorElement.textContent = 'Email is required.';
            resolve(false);
        }

        // Basic email pattern check
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(email)) {
            errorElement.textContent = 'Please enter a valid email address.';
            resolve(false);
        }

        resolve(true);
    });
}

function validatePhoneNumberField(fieldId, errorId) {
    return new Promise((resolve) => {
        const phone = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (phone === '') {
            errorElement.textContent = 'Phone number is required.';
            resolve(false);
        }

        // Basic phone number pattern check
        const re = /^\d{10}$/;
        if (!re.test(phone)) {
            errorElement.textContent = 'Please enter a valid phone number.';
            resolve(false);
        }

        resolve(true);
    });
}

function validatePasswordField(fieldId, errorId) {
    return new Promise((resolve) => {
        const password = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (password === '') {
            errorElement.textContent = 'Password is required.';
            resolve(false);
        }

        if (password.length < 6) {
            errorElement.textContent = 'Password must be at least 6 characters long.';
            resolve(false);
        }

        resolve(true);
    });
}

function validatePasswordMatch(passwordId, passwordCheckId, errorId) {
    return new Promise((resolve) => {
        const password = document.getElementById(passwordId).value.trim();
        const passwordCheck = document.getElementById(passwordCheckId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (password !== passwordCheck) {
            errorElement.textContent = 'Passwords do not match.';
            resolve(false);
        }

        resolve(true);
    });
}

function validateTextField(fieldId, errorId, minLength) {
    return new Promise((resolve) => {
        const value = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (value.length < minLength) {
            errorElement.textContent = `This field must be at least ${minLength} characters long.`;
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => {
        errorMessage.textContent = '';
    });
}
