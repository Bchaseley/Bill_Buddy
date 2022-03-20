const bookshelf = require('./index');

module.exports = function (bookshelf) {

    return bookshelf.model("Transactions", {
        tableName: "transactions",
        hasTimestamps: true,
        user() {
            return this.belongsTo('User')
        }
    });
};