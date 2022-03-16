const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'Leet1337?!',
        database: 'bill_buddy',
        charset: 'utf8'
    }
})
const bookshelf = require('bookshelf')(knex)

module.exports = {
    User: require("./user.js")(bookshelf),
    Transaction: require("./transaction")(bookshelf)
};