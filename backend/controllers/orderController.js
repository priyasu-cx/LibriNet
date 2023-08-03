const Order = require("../models/orderModel");
const Book = require("../models/bookModel");
const User = require("../models/userModel");

// @desc    Add to Cart
// @route   POST /api/orders/addtocart
// @access  Private
const addToCart = async (req, res) => {
  const { bookno, quantity } = req.body;
  const user = req.user;
  var cart;

  // check if book exists
  if (user.cart.find((item) => item.bookno === bookno)) {
    // Update only quantity
    cart = await User.findOneAndUpdate(
      { _id: user._id, "cart.bookno": bookno },
      { $set: { "cart.$.quantity": quantity } }
    );
  } else {
    cart = await User.findOneAndUpdate(
      { _id: user._id },
      { $push: { cart: { bookno, quantity } } },
      { new: true }
    );
  }

  if (cart) {
    res.status(201).json({ msg: "Added to cart" });
  } else {
    res.status(400).json({ msg: "Invalid cart data" });
  }
};

// @desc    Delete Item fom Cart
// @route   DELETE /api/orders/deleteitem/:bookno
// @access  Private
const deleteItem = async (req, res) => {
    const user = req.user;
    const bookno = req.params.bookno;
    const cart = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { cart: { bookno } } },
        { new: true }
    );
    if (cart) {
        res.status(200).json({ msg: "Item removed from cart" });
    } else {
        res.status(400).json({ msg: "Invalid cart data" });
    }
}

// @desc    Empty Cart
// @route   GET /api/orders/emptycart
// @access  Private
const emptyCart = async (req, res) => {
    const user = req.user;
    user.cart = [];
    await user.save();
    res.status(200).json({ msg: "Cart emptied" });
}

module.exports = {
  addToCart,
  emptyCart,
  deleteItem
};
