const transactions = require("../controllers/transactions");
const user = require("../controllers/users");
const jwt = require("../middleware/jwt");

module.exports = app => {

    app.post("/register", user.register);
    app.post("/login", user.login);

    app.use("/api/*", jwt.authenticate)

    app.get("/api/transactions", transactions.readAll);
    app.get("/api/transaction/find", transactions.read);
    app.post("/api/transaction", transactions.create);
    app.put("/api/transaction/:id", transactions.update);
    app.delete("/api/transaction/:id", transactions.delete);

    app.get("/api/user/find", user.read);
    app.put("/api/user/:id", user.update);
    app.delete("/api/user/:id", user.delete);
}