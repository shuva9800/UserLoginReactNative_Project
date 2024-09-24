
const express = require('express');
const authRoutes = require('./routes/user.route');
const db = require('./config/database');
const cors = require('cors');
require('dotenv').config();

const app = express();

//middleware
app.use(express.json());
app.use(cors())

//routing
app.use('/api/v1/auth', authRoutes);

// server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Hello dashboard"
    });
});
