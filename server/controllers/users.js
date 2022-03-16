const User = global.Models.User;
const bcrypt = require("bcrypt");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

module.exports = {

  register: async (req, res) => {
    try {
      if (!req.body.password)
        throw new Error("Missing or invalid password.");

      let values = _.pick(req.body, ["email", "password", "firstName", "lastName"]);
      let user = await User.forge(values).save();
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
      res.cookie(user, token, { httpOnly: true });
      res.status(200).json({});
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e)
    }
  },

  login: async (req, res) => {

    try {
      let email = req.body.email,
        password = req.body.password;
      if (!email || !password)
        throw new Error("Invalid login attempt. Missing email or password.");
      let user = await new User({ 'email': email }).fetch();
      if (user === null) {
        throw new Error("Invalid login attempt. Create an account first.");
      } else {
        console.log(user.id);
        validPassword = await bcrypt.compare(password, user.attributes.password);
        if (!validPassword) {
          throw new Error("Invalid login attempt. Wrong Password.");
        } else {
          res.cookie(user, jwt.sign({ id: user.attributes.id }, process.env.JWT_SECRET), { httpOnly: true });
          res.status(200).json({});
        }
      };
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e)
    }
  },

  logout: async (req, res) => {
    res
      .cookie("user", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
        httpOnly: true,
        maxAge: 0,
      })
      .json({ msg: "ok" });
  },

  read: async (req, res) => {
    try {
      let id = req.query.params;
      let user = await new User({ 'id': id }).fetch();
      res.status(200).json(user);
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  update: async (req, res) => {
    try {
      let id = req.query.params;
      let user = await User.where({ 'id': id }).save(
        { ...req.body },
        { patch: true }
      );
      res.json(user)
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message ? { error: e.message } : e)
    }
  },

  delete: async (req, res) => {
    try {
      let id = req.query.params;
      let user = await User.where({ 'id': id }).destroy();
      res.json(user)
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message ? { error: e.message } : e)
    }
  }

};