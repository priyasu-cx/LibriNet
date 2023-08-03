const express = require("express");

const router = express.Router();

// controller functions
const { getAllBooks, getBookByName } = require("../controllers/bookController");

// get all books
router.get("/", getAllBooks);

// get book by name
router.get("/:bookname", getBookByName);

module.exports = router;
