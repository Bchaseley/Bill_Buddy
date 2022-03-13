const bookshelf = require('./index');
const Promise = require("bluebird");
const bcrypt = require("bcrypt");


module.exports = function (bookshelf) {

    return bookshelf.model("User", {
        tableName: "users",

        initialize() {
            this.on("creating", this.hashPassword, this);
        },

        hashPassword(model, attrs, options) {
          return new Promise((resolve, reject) => {
              bcr

          })
        },

        transactions() {
            return this.hasMany(Transactions)
        }
    });
};