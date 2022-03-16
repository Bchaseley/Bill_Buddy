const jwt = require("jsonwebtoken");

module.exports = {

    authenticate(req, res, next) {
        console.log(req.cookies.id);
        jwt.verify(req.cookies, process.env.JWT_SECRET, (err, payload) => {
            if (err) {
                res.status(403).json({ verified: false });
            } else {
                req._jwt = payload;
                next();
            }
        }
        );
    },

};