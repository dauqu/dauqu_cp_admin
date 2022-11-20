const mongoose = require("mongoose");

//Schema
const TechnoloogySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    build_info: {
        type: Array,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("technologies", TechnoloogySchema);