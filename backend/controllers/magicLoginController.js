const passport = require("passport");
const passportJWT = require("passport-jwt");
const MagicLoginStrategy = require("passport-magic-login").default;
var SibApiV3Sdk = require("sib-api-v3-sdk");
const User = require("../models/userModel");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// verify if user exists
const getOrCreateUserWithEmail = async (payload) => {
  // check if user exists if not create new or return user
  // console.log(payload);
  const userExists = await User.findOne({ email: payload.destination });
  if (userExists) {
    return userExists;
  } else {
    const user = await User.create({
      name: "Anonymous",
      email: payload.destination,
      password: "",
      phone: "",
      orders: [],
      cart: [],
      wishlist: [],
      address: "",
    });
    if (user) {
      return user;
    }
  }
};

// Send Email through BREVO
const sendEmail = async (body, destination) => {
  var defaultClient = SibApiV3Sdk.ApiClient.instance;
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
  sendSmtpEmail = {
    subject: "LibriNet Login",
    to: [{ email: destination, name: body.name }],
    sender: { email: "priyasuguin4@gmail.com", name: "LibriNet" },
    htmlcontent: `<html><body><h1>LibriNet</h1><p>Click <a href="http://localhost:5000${body.href}">here</a> to login.</p></body></html><br>http://localhost:5000${body.href}`,
    params: {
      name: body.name,
      href: body.href,
    },
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      console.error(error);
    }
  );
};

// Magic Login Strategy
const magicLogin = new MagicLoginStrategy({
  secret: process.env.MAGIC_LOGIN_SECRET,
  callbackUrl: "/api/auth/magiclogin/callback",

  sendMagicLink: async (destination, href) => {
    const link = "http://localhost:5000" + href;
    console.log("Sending Magic Link to", destination, "link", link);
    await sendEmail({ name: "LibriNet", href: href }, destination);
  },

  verify: async (payload, callback) => {
    getOrCreateUserWithEmail(payload)
      .then((user) => {
        callback(null, user, { message: "Logged In Successfully"});
      })
      .catch((err) => {
        callback(err);
      });
  },

  jwtOptions: {
    expiresIn: "1d",
  },
});

passport.use(magicLogin);

// passport.use(
//   new JWTStrategy(
//     {
//       jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//       secretOrKey: process.env.JWT_SECRET_KEY,
//     },
//     function (jwtPayload, cb) {
//       return User.findOne({ email: jwtPayload.email })
//         .then((user) => {
//           return cb(null, user);
//         })
//         .catch((err) => {
//           return cb(err);
//         });
//     }
//   )
// );

module.exports = magicLogin;
