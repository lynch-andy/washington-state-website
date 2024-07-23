// scripts.js

// Function to validate the form
function validateForm() {
    // Get the values of the form fields from the user
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var message = document.getElementById("message").value;

    // Check if all fields are filled in
    if (name === "" || email === "" || confirmEmail === "" || message === "") {
        alert("All fields must be filled out");
        return false; // Prevent form submission
    }

    // Check if both email addresses match
    if (email !== confirmEmail) {
        alert("Email addresses do not match");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
