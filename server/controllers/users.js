const User = global.Models.User;
const bcrypt = require("bcrypt");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

module.exports = {

  register: async (req, res) => {
    try {
      if(!req.body.password)
        throw new Error("Missing or invalid password.");

      let values = _.pluck(req.body, ["email", "password", "firstName", "lastName"]);
      let user = await new User.forge(values).save();
      console.log("USER", user);

      // log them in
      // set the jwt token
      let token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET);
      res.cookie("user", token, { httpOnly: true });
      res.status(200).json({});
    }catch(e) {
      res.status(500).json({ error: e })
    }
  },

  login: async (req, res) => {
    // TODO

  }

};