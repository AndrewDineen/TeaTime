const User = require("../models/user");
const user = require("../models/user");
exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  User.findByPk(1)
    .then(user => {
      req.session.user = user;
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    res.redirect("/");
    if(err){console.log(err);}
  });
};
