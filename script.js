// Get references to the elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const btn = document.getElementById('btn');

// Function to show the login form
function showLogin() {
    loginForm.style.left = "50px";
    signupForm.style.left = "450px";
    btn.style.left = "0";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
}

// Function to show the signup form
function showSignup() {
    loginForm.style.left = "-400px";
    signupForm.style.left = "50px";
    btn.style.left = "110px";
    loginForm.style.display = "none";
    signupForm.style.display = "block";
}

// Add event listeners to the buttons
document.querySelector('button[onclick="showLogin()"]').addEventListener('click', showLogin);
document.querySelector('button[onclick="showSignup()"]').addEventListener('click', showSignup);

// Initialize the form to show login by default
showLogin();

document.getElementById('signup-form').addEventListener('submit', function(event) {
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

    if (password !== confirmPassword) {
      event.preventDefault(); // Prevent form submission
      document.querySelector('.error-message').style.display = 'block';
    }
  });