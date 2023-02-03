const mongoose = require('mongoose');

const Book = mongoose.model(
    'Book',
    new mongoose.Schema({
        title: String,
        description: String,
        published: Boolean,
        author: String
    })
);

module.exports = Book;