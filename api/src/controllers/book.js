const db = require("../models");
const Book = db.book;

getAllBooks = async (req, res) => {
    try {
        console.log("books");
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
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published: req.body.published
    });

    book.save((err, book) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
    });
    return res.status(200).send(book);
};

deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
    } catch (err) {
        this.next(err);
    }
    return res.status(200).send({ message: "Book was deleted successfully!" });
}

updateBook = async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published: req.body.published
    });

    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    } catch (err) {
        this.next(err);
    }
    return res.status(200).send({ message: "Book was updated successfully!" });
}

const bookController = {
    getAllBooks,
    getBookById,
    insertBook,
    deleteBook,
    updateBook
}

module.exports = bookController;