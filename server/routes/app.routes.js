const TransController = require("../controllers/trans.controller");
const UserController = require("../controllers/user.controller");

module.exports = app => {

    //all routes for users
    app.post("/register", (req, res) => {
        console.log(req.body);
        UserController.register(req.body)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            })
    });
    
    app.post("/login", (req, res) => {
        UserController.login(req.body)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            })
    });

    //all routes for transactions
    app.get('/api/allTrans', (req, res) => {
        TransController.getTrans()
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            })
    })

    app.post('/api/trans', (req, res) => {
        TransController.addTrans(req.body)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            })
    });

    app.delete('/api/trans/:id', (req, res) => {
        TransController.deleteTrans(req.params.id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            })
    });

}