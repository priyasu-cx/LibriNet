const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookno: {
        type: String,
        required: true,
        unique: true,
    },
    bookname: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    views:{
        type: Number,
    },
    image:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Book', bookSchema, 'books');