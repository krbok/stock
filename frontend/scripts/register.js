// scripts/register.js
document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    try {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password, role })
        });
  
        const data = await response.json();
  
        if (response.ok) {
            alert(data.message); // Display success message
            window.location.href = '/login.html'; // Redirect to login page
        } else {
            alert(data.message); // Display error message
        }
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while registering.');
    }
  });
  