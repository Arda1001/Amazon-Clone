const validCountries = ['United States', 'Canada', 'United Kingdom', 'Australia']; // Example list of valid countries

document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', validateCheckoutForm);
});

async function validateCheckoutForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    clearErrorMessages();

    // Validate Name
    const nameValid = await validateTextField('name', 'nameError', 2);
    // Validate Address
    const addressValid = await validateTextField('address', 'addressError', 5);
    // Validate City
    const cityValid = await validateSelectField('city', 'cityError');
    // Validate Postal Code
    const postalCodeValid = await validatePostalCodeField('postalCode', 'postalCodeError');
    // Validate Country
    const countryValid = await validateSelectField('country', 'countryError');
    // Validate Card Name
    const cardNameValid = await validateTextField('cardName', 'cardNameError', 2);
    // Validate Card Number
    const cardNumberValid = await validateCardNumberField('cardNumber', 'cardNumberError');
    // Validate Expiry Date
    const expiryDateValid = await validateExpiryDateField('expiryDate', 'expiryDateError');
    // Validate CVV
    const cvvValid = await validateCVVField('cvv', 'cvvError');

    if (nameValid && addressValid && cityValid && postalCodeValid && countryValid && cardNameValid && cardNumberValid && expiryDateValid && cvvValid) {
        // If all fields are valid, show a success message or do nothing for now
        alert('Order placed successfully!'); // Temporary success message for demonstration
    }
    else {
        // Prevent form submission
        return false;
    }
}


function validateSelectField(fieldId, errorId) {
    return new Promise((resolve) => {
        const value = document.getElementById(fieldId).value;
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (value === '') {
            errorElement.textContent = 'This field is required.';
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
}

function validatePostalCodeField(fieldId, errorId) {
    return new Promise((resolve) => {
        const postalCode = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        // Basic postal code pattern check
        const re = /^[A-Za-z0-9]{3,10}$/;
        if (!re.test(postalCode)) {
            errorElement.textContent = 'Please enter a valid postal code.';
            resolve(false);
        }
        else {
            resolve(true);
        }
    });
}

function validateCardNumberField(fieldId, errorId) {
    return new Promise((resolve) => {
        const cardNumber = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (cardNumber === '') {
            errorElement.textContent = 'Card number is required.';
            resolve(false);
        }

        // Basic card number pattern check (16 digits)
        const re = /^\d{16}$/;
        if (!re.test(cardNumber)) {
            errorElement.textContent = 'Please enter a valid card number (16 digits).';
            resolve(false);
        }

        resolve(true);
    });
}

function validateExpiryDateField(fieldId, errorId) {
    return new Promise((resolve) => {
        const expiryDate = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (expiryDate === '') {
            errorElement.textContent = 'Expiry date is required.';
            resolve(false);
        }

        // Basic expiry date pattern check (MM/YY)
        const re = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!re.test(expiryDate)) {
            errorElement.textContent = 'Please enter a valid expiry date (MM/YY).';
            resolve(false);
        }

        resolve(true);
    });
}

function validateCVVField(fieldId, errorId) {
    return new Promise((resolve) => {
        const cvv = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (cvv === '') {
            errorElement.textContent = 'CVV is required.';
            resolve(false);
        }

        // Basic CVV pattern check (3 digits)
        const re = /^\d{3}$/;
        if (!re.test(cvv)) {
            errorElement.textContent = 'Please enter a valid CVV (3 digits).';
            resolve(false);
        }

        resolve(true);
    });
}

