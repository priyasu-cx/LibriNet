const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderid: {
        type: String,
        required: true,
        unique: true,
    },
    bookid: [
        {
            bookno: {
                type: String,
                required: true,
                ref: 'Book',
            },
            quantity: {
                type: Number,
            }
        }
    ],
    userid: {
        type: String,
    },

},{
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema, 'orders');