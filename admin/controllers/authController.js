const User = require('../models/adminModel');
const generateToken = require('../utils/generateToken');

// @desc    Login User
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // console.log(email, password);

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else{
        res.status(400).json({ msg: 'Invalid Email/Password' });
    }
};

// @desc    Signup User
// @route   POST /api/auth/register
// @access  Public
const signupUser = async (req, res) => {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400).json({ msg: 'Admin already exists' });
        return;
    }
    const user = await User.create({ name, email, password, role });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        });
    } else{
        res.status(400).json({ msg: 'Invalid admin data' });
    }
};

// @desc   Logout User
// @route  GET /api/auth/logout
// @access Private
const logoutUser = async (req, res) => {
    
    res.cookie('jwt', '', { 
        httpOnly: true,
        expires: new Date(0),
     });
    
    res.status(200).json({ msg: 'Admin Logged Out' });
}

// @desc   Get User Profile
// @route  GET /api/auth/user
// @access Private
const getUserProfile = async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }

    res.status(200).json(user);
}

// @desc  Update User Profile
// @route PUT /api/auth/user
// @access Private
const updateUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name;

        if(req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        // generateToken(res, updatedUser._id);
        res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        });
    }else{
        res.status(404).json({ msg: 'User not found' });
    }
}

module.exports = {
    loginUser,
    signupUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};