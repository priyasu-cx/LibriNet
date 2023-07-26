const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// controller functions
const { addBook, getAllBooks, getBookByName, updateBook, deleteBook } = require("../controllers/bookController");

// add book
router.post("/add", protect, addBook);

// get all books
router.get("/", protect, getAllBooks);

// get book by name
router.get("/:bookname", protect, getBookByName);

// update book
router.put("/", protect, updateBook);

// delete book
router.delete("/:bookno", protect, deleteBook);

module.exports = router;