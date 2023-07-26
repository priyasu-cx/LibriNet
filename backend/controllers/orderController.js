const Order = require('../models/orderModel');
const Book = require('../models/bookModel');
const User = require('../models/userModel');

// @desc    Add to Cart
// @route   POST /api/orders/addtocart
// @access  Private
const addToCart = async (req, res) => {
    const { bookno, quantity } = req.body;
    const user = req.user;

    const cart = await User.findOneAndUpdate(
        { _id: user._id },
        { $push: { cart: { bookno, quantity } } },
        { new: true }
    )

    if (cart) {
        res.status(201).json(cart);
    } else {
        res.status(400).json({ msg: "Invalid cart data" });
    }
}

module.exports = {
    addToCart,
};