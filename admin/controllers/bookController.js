const Book = require("../models/bookModel");

// @desc    Add Book
// @route   POST /api/auth/book/add
// @access  Private
const addBook = async (req, res) => {
    const { bookname, author, price, stock } = req.body;
    const bookno = bookname.substring(0, 3) + Math.floor(Math.random() * 10000);

    const bookExists = await Book.findOne({ bookno });
    if (bookExists) {
        res.status(400).json({ msg: 'Book already exists' });
        return;
    }
    
    const book = await Book.create({ bookno, bookname, author, price, stock });
    if(book){
        res.status(201).json({
            _id: book._id,
            bookno: book.bookno,
            bookname: book.bookname,
        });
    } else{
        res.status(400).json({ msg: 'Invalid book data' });
    }
};

// @desc    Get All Books
// @route   GET /api/auth/book/all
// @access  Private
const getAllBooks = async (req, res) => {
    const books = await Book.find({});
    res.json(books);
};

// @desc    Get Book by Name
// @route   GET /api/auth/book/:bookname
// @access  Private
const getBookByName = async (req, res) => {
    //get book by part of name
    const bookname = req.params.bookname;
    const books = await Book.find({ bookname: { $regex: bookname, $options: 'i' } });
    res.json(books);
};

// @desc    Update Book
// @route   PUT /api/auth/book
// @access  Private
const updateBook = async (req, res) => {
    // update book by bookno
    const book = await Book.findOne({ bookno: req.body.bookno });
    if (book) {
        book.bookname = req.body.bookname || book.bookname;
        book.author = req.body.author || book.author;
        book.price = req.body.price || book.price;
        book.stock = req.body.stock || book.stock;

        const updatedBook = await book.save();
        res.json({
            _id: updatedBook._id,
            bookno: updatedBook.bookno,
            bookname: updatedBook.bookname,
            price: updatedBook.price,
            stock: updatedBook.stock,
        });
    } else {
        res.status(404).json({ msg: 'Book not found' });
    }
};

module.exports = {
    addBook,
    getAllBooks,
    getBookByName,
    updateBook,
};