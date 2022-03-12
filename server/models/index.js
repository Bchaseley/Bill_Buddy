const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        charset: 'utf8'
    }
})
const bookshelf = require('bookshelf')(knex)

module.exports = {
    User: require("./user.js")(bookshelf),
    Transaction: require("./transaction")(bookshelf)
};