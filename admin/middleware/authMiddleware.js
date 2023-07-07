const jwt = require('jsonwebtoken');
const User = require('../models/adminModel');

const protect = async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (!token) {
        res.status(401).json({ msg: 'Not authorized, no token' });
        return;
    } else {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch{
            res.status(401).json({ msg: 'Not authorized, token failed' });
            return;
        }
    }
};

exports.protect = protect;