const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send(`Server is up and running on PORT: ${process.env.port}`);
})

app.listen(process.env.port, () => {
    console.log(`Server is up and running on PORT: ${process.env.port}`);
})

connectDB();