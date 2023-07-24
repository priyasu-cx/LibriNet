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
  magicLoginCallback,
} = require("../controllers/authController");
const magicLogin = require("../controllers/magicLoginController");
const passport = require("passport");

router.get("/", (req, res) =>
  res.json({ msg: "Welcome to the LibriNet Auth API" })
);

// login route
router.post("/login", loginUser);

// magic login route
router.post("/magiclogin", magicLogin.send);

// magic login callback route
// router.get(
//   "/magiclogin/callback",
//   passport.authenticate("magiclogin", {
//     session: false,
//     failureRedirect: "/login",
//     successReturnToOrRedirect: "http://localhost:3000/", // redirect to homepage on success
//   }, (req, res) => {
//     res.redirect("http://localhost:3000/");

//   })
// );
router.get("/magiclogin/callback", magicLoginCallback);

// signup route
router.post("/register", signupUser);

// logout route
router.get("/logout", logoutUser);

// get user profile
router.get("/user", protect, getUserProfile);

// update user profile
router.put("/user", protect, updateUserProfile);

module.exports = router;
