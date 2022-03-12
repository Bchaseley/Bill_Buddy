const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD
});

// const getTrans = () => {
//     return new Promise(function (resolve, reject) {
//         pool.query('SELECT * FROM transactions', (error, results) => {
//             if (error) {
//                 reject(error);
//             };
//             resolve(results.rows);
//         })
//     })
// };
const addTrans = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, amount, datePaid } = body;
        pool.query('INSERT INTO transactions (name, amount, datePaid) VALUES ($1, $2, $3) RETURNING *', [name, amount, datePaid], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new transaction has been added added: ${results.rows[0]}`)
        })
    })
};
const searchTrans = (body) => {
    return new Promise(function (resolve, reject) {
        const searchQuery = body;
        if (typeof searchQuery === Date) {
            pool.query('SELECT * FROM transaction WHERE datePaid = $1', [searchQuery], (error, results) => {
                if (error) {
                    reject(error);
                };
                resolve(searchResults.rows);
            })
        }
        if (typeof searchQuery === String) {
            pool.query('SELECT * FROM transaction WHERE name = $1', [searchQuery], (error, results) => {
                if (error) {
                    reject(error);
                };
                resolve(searchResults.rows);
            })
        }
    })
};
const deleteTrans = () => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(request.params.id);
        pool.query('DELETE FROM transactions WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            };
            resolve(`Transaction deleted with ID: ${id}`)
        })
    })
};
module.exports = {
    getTrans,
    addTrans,
    deleteTrans,
};