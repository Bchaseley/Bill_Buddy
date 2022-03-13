const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD
});

const register = (body) => {
    return new Promise(function (resolve, reject) {
        const { firstName, lastName, email, password } = body
        pool.query('INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, lastName, email, password], (error, results) => {
            if (error) {
                console.log("didnt work")
                reject(error)
            }
            resolve(`A new user has been added added: ${results}`)
            
        })
    })
};
const login = (body) => {
    return new Promise(function (resolve, reject) {
        const email = body.email
        pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
            if (error) {
                reject(error)
            };
            resolve(`Successfully found user.`)
        })
            .then((user) => {
                if (user === null) {
                    res.status(400).json({ msg: "invalid login attempt" });
                }
                else {
                    bcrypt.compare(req.body.password, user.password)
                        .then((passwordIsValid) => {
                            if (passwordIsValid) {
                                res.cookie("usertoken", jwt.sign({ _id: user._id }, process.env.JWT_SECRET), { httpOnly: true, }).json({ msg: "success!" });
                            } else {
                                res.status(400).json({ msg: "invalid login attempt" });
                            };
                        })
                        .catch((err) => res.status(400).json({ msg: "invalid login attempt" }));
                };
            })
            .catch((err) => res.json(err));
    });
};

module.exports = {
    register,
    login
}