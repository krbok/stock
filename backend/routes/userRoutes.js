// routes/userRoutes.js
const express = require('express');
const User = require('../models/user'); // Use lowercase 'user'


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // JWT for session handling
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        
        // Send success response with token
        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error occurred during login:', error);
        return res.status(500).json({ message: 'An internal server error occurred' });
    }
});

module.exports = router;
