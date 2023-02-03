const db = require("../models");
const Book = db.book;

getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send(books);
    } catch (err) {
        this.next(err);
    }
};

getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        return res.status(200).send(book);
    } catch (err) {
        this.next(err);
    }
};

insertBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        return res.status(200).send(book);
    } catch (err) {
        this.next(err);
    }
};

deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        return res.status(200).send(book);
    } catch (err) {
        this.next(err);
    }
}