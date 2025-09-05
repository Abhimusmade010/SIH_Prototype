const express = require('express');

const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();


connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/admin', adminRoutes);


app.get('/', (req, res) => {
    res.send('API is running...');
});

         
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




