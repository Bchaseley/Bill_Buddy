const User = global.Models.User;
const bcrypt = require("bcrypt");

module.exports = {

  register: async (req, res) => {
    try {
      if(!req.body.password)
        throw new Error("Missing or invalid password.");

      // do bcrypt stuff, get a variable that has the hashed password
      let hashed = bcrypt.hash(req.body.password, process.env.PASSWORD_SALT)


      //let user =


    }catch(e) {
      res.status(500).json({ error: e })
    }
  },

  login: async (req, res) => {
    // TODO

  }

};