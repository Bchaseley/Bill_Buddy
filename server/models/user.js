const bookshelf = require('./index');
const Promise = require("bluebird");
const bcrypt = require("bcrypt");


module.exports = function (bookshelf) {

    return bookshelf.model("User", {
        tableName: "users",

        constructor: function () {
            bookshelf.Model.apply(this, arguments);
            this.on('creating', this.hashPassword);
        },

        hashPassword(model, attrs, options) {
            return new Promise((resolve, reject) => {
                bcrypt.hash(model.attributes.password, 10, (err, hash) => {
                    if (err) return reject(err);
                    model.set("password", hash);
                    resolve();
                });
            })
        },

        transactions() {
            return this.hasMany(Transactions)
        }
    });
};