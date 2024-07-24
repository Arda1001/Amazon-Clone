document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.getElementById('signInForm');
    signInForm.addEventListener('submit', validateSignInForm);
});

async function validateSignInForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    clearErrorMessages();

    // Validate Email and Password
    const emailValid = await validateEmailField('email', 'emailError');
    const passwordValid = await validatePasswordField('password', 'passwordError');

    if (emailValid && passwordValid) {
        // If all fields are valid, show a success message or do nothing for now
        alert('Sign-In successful!'); // Temporary success message for demonstration
    }
    else {
        // Prevent form submission
        return false;
    }
}


