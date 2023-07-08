const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        unique: true,
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }],
    address: {
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    // status: {
    //     type: String,
    // }
}, {
    timestamps: true,
});

// hash password before saving to database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


module.exports = mongoose.model('User', userSchema);