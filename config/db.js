const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv').config();

const mongo_url = process.env.mongodb_url;
const connectDB = () => {
    mongoose.connect(mongo_url)
        .then(() => console.log('DB is connected'))
        .catch((error) => console.log(error))
}

module.exports = connectDB;