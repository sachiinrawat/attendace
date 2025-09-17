const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server is running'
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
