const jwt = require("jsonwebtoken");

module.exports = {

    authenticate(req, res, next) {
        jwt.verify(req.cookies.user, process.env.JWT_SECRET, (err, payload) => {
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