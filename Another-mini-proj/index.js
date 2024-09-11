// Select form and output elements
const form = document.getElementById('userForm');
const storedName = document.getElementById('storedName');
const storedEmail = document.getElementById('storedEmail');
const storedMessage = document.getElementById('storedMessage');

// Function to handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Store data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    // Display stored data
    displayStoredData();
});

// Function to display data from localStorage
function displayStoredData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    if (name && email && message) {
        storedName.textContent = `Name: ${name}`;
        storedEmail.textContent = `Email: ${email}`;
        storedMessage.textContent = `Message: ${message}`;
    }
}

// Display stored data on page load
window.onload = displayStoredData;
