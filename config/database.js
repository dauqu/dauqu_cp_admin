// require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://web_panl:7388139606@cluster0.o3pdjlp.mongodb.net/?retryWrites=true&w=majority");
        console.log("MongoDB connection SUCCESS");
        // require('../data/import');
    } catch (error) { 
        console.error("MongoDB connection FAIL");
        // process.exit(1);
    }
};

module.exports = connectDB;