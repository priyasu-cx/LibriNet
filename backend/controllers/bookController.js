const Book = require('../models/bookModel');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getAllBooks = async (req, res) => {
    const books = await Book.find({});
    res.status(200).json(books);
};

// @desc    Get book by Name
// @route   GET /api/books/:bookname
// @access  Public
const getBookByName = async (req, res) => {
    //get book by part of name
    const bookname = req.params.bookname;
    const books = await Book.find({ bookname: { $regex: bookname, $options: 'i' } });
    res.status(200).json({
        bookno: books.bookno,
        bookname: books.bookname,
        author: books.author,
        price: books.price,
        stock: books.stock,
    });
}


module.exports = {
    getAllBooks,
    getBookByName,
}