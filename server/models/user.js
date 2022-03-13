const bookshelf = require('./index');

module.exports = function (bookshelf) {

    return bookshelf.model("User", {
        tableName: "users",
        transactions() {
            return this.hasMany(Transactions)
        }
    });
};