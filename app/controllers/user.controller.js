const db = require("../models");
const User = db.user;

// register user
exports.register = (req, res) => {
  //   Auth.find()
  //     .then((result) => {
  //       res.send(result);
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: err.message || "Some error while retrieving data.",
  //       });
  //     });
  res.send("Regist!");
};
// login user
exports.login = (req, res) => {
  res.send("Login!");
};
