// scripts/login.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
            alert(data.message); // Show success message
            // Redirect to dashboard or another page after successful login
            window.location.href = '/dashboard.html';
        } else {
            alert(data.message); // Show error message from server response
        }
    } catch (error) {
        console.error('Error occurred during login:', error);
        alert('An error occurred during login.');
    }
  });
  