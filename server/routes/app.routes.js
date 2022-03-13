const transactions = require("../controllers/transactions");
const user = require("../controllers/users");
const jwt = require("../middleware/jwt");

module.exports = app => {

    //all routes for users
    app.post("/register", user.register);
    app.post("/login", user.login);

    app.use("/api/*", jwt.authenticate)

    app.get("/api/transactions", transactions.readAll);
    app.get("/api/transaction/:id", transactions.read);
    app.post("/api/transaction", transactions.create);
    app.put("/api/transaction", transactions.update);
    app.delete("/api/transaction", transactions.delete);

    app.get("/api/user/:id", user.read);
}