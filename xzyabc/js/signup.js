document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Form validation
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simple password validation (min 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Example of simple password "hashing" (not secure, for demo purposes only)
    const hashedPassword = btoa(password); // This is just base64 encoding, not a real hash

    // Save data to local storage (consider security risks in production)
    const userData = {
        username: username,
        email: email,
        password: hashedPassword
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Sign up information saved to local storage!');

    // Redirect to home page or login page after successful sign-up
    window.location.href = 'login.html';
});
