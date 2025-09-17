const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');
const teachers = require('./data/teachers.json');

dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 6000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server is running'
    });
});

// Teacher login route
app.post('/portal', (req, res) => {
    const { name, phone } = req.body;
    
    // Check if teacher exists in dummy data
    const teacher = teachers.teachers.find(
        t => t.name === name && t.phone === phone
    );

    if (teacher) {
        // In a real application, you might want to use sessions or JWT here
        res.status(200).json({
            success: true,
            message: 'Login successful',
            redirectUrl: '/attendance'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid credentials'
        });
    }
});

// Attendance route (protected route - in a real application, add authentication middleware)
app.get('/attendance', (req, res) => {
    res.status(200).json({
        message: 'Welcome to attendance page'
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
