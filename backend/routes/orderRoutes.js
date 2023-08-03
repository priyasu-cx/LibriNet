const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// controller functions
const {
    addToCart,
    deleteItem,
    emptyCart
} = require('../controllers/orderController');

// add to cart route
router.post('/addtocart', protect, addToCart);

// empty cart route
router.get('/emptycart', protect, emptyCart);

// delete item route
router.delete('/deleteitem/:bookno', protect, deleteItem);

module.exports = router;