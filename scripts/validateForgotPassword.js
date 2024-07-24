document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    forgotPasswordForm.addEventListener('submit', validateForgotPasswordForm);
});

async function validateForgotPasswordForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous error messages
    clearErrorMessages();

    // Validate Email or Phone Number
    const contactValid = await validateContactField('contact', 'contactError');

    if (contactValid) {
        // If the field is valid, show a success message or do nothing for now
        alert('Password reset instructions sent!'); // Temporary success message for demonstration
    }
    else {
        // Prevent form submission
        return false;
    }
}

function validateContactField(fieldId, errorId) {
    return new Promise((resolve) => {
        const contact = document.getElementById(fieldId).value.trim();
        const errorElement = document.getElementById(errorId);

        errorElement.textContent = '';

        if (contact === '') {
            errorElement.textContent = 'Email or phone number is required.';
            resolve(false);
        }

        // Check if contact is a valid email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if contact is a valid phone number (adjust pattern according to your requirements)
        const phonePattern = /^\d{10}$/;

        if (!emailPattern.test(contact) && !phonePattern.test(contact)) {
            errorElement.textContent = 'Please enter a valid email address or phone number.';
            resolve(false);
        }

        resolve(true);
    });
}
