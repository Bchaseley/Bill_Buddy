const transactions = require("../controllers/transactions");
const user = require("../controllers/users");
const jwt = require("../middleware/jwt");

module.exports = app => {

    app.use("/api/*", jwt.authenticate)
    //routes for users
    app.post("/register", user.register);
    app.post("/login", user.login);
    app.post("/api/logout", user.logout);
    app.get("/api/user/find", user.read);
    app.get("/api/user/findLogged", user.findLogged);
    app.put("/api/user/:id", user.update);
    app.delete("/api/user/:id", user.delete);
    //routes for transactions
    app.get("/api/transactions", transactions.readAll);
    app.get("/api/transaction/:id", transactions.read);
    app.post("/api/transactions/search", transactions.search);
    app.post("/api/transaction", transactions.create);
    app.put("/api/transaction/:id", transactions.update);
    app.delete("/api/transaction/:id", transactions.delete);
    
}