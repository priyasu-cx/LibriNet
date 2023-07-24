const passport = require("passport");
const User = require("../models/userModel");

const generateToken = require("../utils/generateToken");
const { verify } = require("jsonwebtoken");

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
  } else {
    res.status(400).json({ msg: "Invalid Email/Password" });
  }
};

// @desc    Signup User
// @route   POST /api/auth/register
// @access  Public
const signupUser = async (req, res) => {
  const { name, email, password, phone } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ msg: "User already exists" });
    return;
  }
  const user = await User.create({
    name,
    email,
    password,
    phone,
    orders: [],
    cart: [],
    wishlist: [],
    address: "",
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  } else {
    res.status(400).json({ msg: "Invalid user data" });
  }
};

// @desc    Magic Login
// @route   POST /api/auth/magiclogin/callback
// @access  Public
const magicLoginCallback = async (req, res, next) => {
  passport.authenticate(
    "magiclogin",
    {
      session: false,
      failureRedirect: "/login",
      successReturnToOrRedirect: "http://localhost:3000/", // redirect to homepage on success
    },
    (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: "Something is not right",
          user: user,
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        const token = generateToken(res, user._id);
        return res.status(200).json({ user, token });
      });
    }
  )(req, res, next);
};

// @desc   Logout User
// @route  GET /api/auth/logout
// @access Private
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ msg: "User Logged Out" });
};

// @desc   Get User Profile
// @route  GET /api/auth/user
// @access Private
const getUserProfile = async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
};

// @desc  Update User Profile
// @route PUT /api/auth/user
// @access Private
const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    // generateToken(res, updatedUser._id);
    res.status(201).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404).json({ msg: "User not found" });
  }
};

module.exports = {
  loginUser,
  signupUser,
  magicLoginCallback,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
