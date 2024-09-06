document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Fixed login credentials
    const fixedEmail = "user@example.com";
    const fixedPassword = "password123";
    
    if (email === fixedEmail && password === fixedPassword) {
        window.location.href = "homepage.html"; // Redirect to homepage
    } else {
        alert("Invalid login credentials. Try again.");
    }
});
