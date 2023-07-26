const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// controller functions
const {
    addToCart,
} = require('../controllers/orderController');

// add to cart route
router.post('/addtocart', protect, addToCart);

module.exports = router;