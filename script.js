document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true; // Track validation status

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Full Name Validation
    if (name.length < 5) {
        document.getElementById("nameError").textContent = "Name must be at least 5 characters.";
        isValid = false;
    }

    // Email Validation
    if (!email.includes("@") || email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    // Phone Number Validation
    if (phone.length !== 10 || isNaN(phone) || phone === "1234567890") {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Password Validation
    if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === name.toLowerCase()) {
        document.getElementById("passwordError").textContent = "Password is too weak.";
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
});

// Real-time Validation on Change
document.getElementById("name").addEventListener("change", function () {
    if (this.value.trim().length >= 5) {
        document.getElementById("nameError").textContent = "";
    }
});

document.getElementById("email").addEventListener("change", function () {
    if (this.value.includes("@")) {
        document.getElementById("emailError").textContent = "";
    }
});

document.getElementById("phone").addEventListener("change", function () {
    if (this.value.length === 10 && !isNaN(this.value) && this.value !== "1234567890") {
        document.getElementById("phoneError").textContent = "";
    }
});

document.getElementById("password").addEventListener("change", function () {
    let name = document.getElementById("name").value.trim();
    if (this.value.length >= 8 && this.value.toLowerCase() !== "password" && this.value.toLowerCase() !== name.toLowerCase()) {
        document.getElementById("passwordError").textContent = "";
    }
});

document.getElementById("confirmPassword").addEventListener("change", function () {
    if (this.value === document.getElementById("password").value) {
        document.getElementById("confirmPasswordError").textContent = "";
    }
});
