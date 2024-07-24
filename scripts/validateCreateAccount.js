document.addEventListener('DOMContentLoaded', () => {
    const createAccountForm = document.getElementById('createAccountForm');
    createAccountForm.addEventListener('submit', validateCreateAccountForm);
});

async function validateCreateAccountForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    clearErrorMessages();

    // Validate Name
    const nameValid = await validateTextField('name', 'nameError');
    // Validate Email
    const emailValid = await validateEmailField('email', 'emailError');
    // Validate Password
    const passwordValid = await validatePasswordField('password', 'passwordError');
    // Validate Password Confirmation
    const passwordCheckValid = await validatePasswordMatch('password', 'passwordCheck', 'passwordCheckError');

    if (nameValid && emailValid && passwordValid && passwordCheckValid) {
        // If all fields are valid, show a success message or do nothing for now
        alert('Account created successfully!'); // Temporary success message for demonstration
    }
    else {
        // Prevent form submission
        return false;
    }
}


