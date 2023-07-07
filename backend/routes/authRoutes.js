const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// controller functions
const {
  loginUser,
  signupUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");

router.get("/", (req, res) =>
  res.json({ msg: "Welcome to the LibriNet Auth API" })
);

// login route
router.post("/login", loginUser);

// signup route
router.post("/register", signupUser);

// logout route
router.get("/logout", logoutUser);

// get user profile
router.get("/user", protect, getUserProfile);

// update user profile
router.put("/user", protect, updateUserProfile);

module.exports = router;
