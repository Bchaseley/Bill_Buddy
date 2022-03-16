const Transaction = global.Models.Transaction;
const User = global.Models.User;
const _ = require("lodash");

module.exports = {

  readAll: async (req, res) => {
    let id = req._jwt.user_id;

    try {
      let user = await new User({ 'id': id }).fetch({ withRelated: ["transactions"] });
      let transactions = user.related("transactions");
      res.status(200).json(transactions);
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  read: async (req, res) => {
    try {
      let name = _.pick(req.body, ["name"]);
      console.log("hello");
      let transaction = await new Transaction({ 'name': name }).fetch();
      res.status(200).json(transaction);
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  create: async (req, res) => {
    try {
      let values = _.pick(req.body, ["name", "amount", "datePaid"]);
      let transaction = await Transaction.forge(values).save();
      res.status(200).json(transaction);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message ? { error: e.message } : e)
    }
  },

  update: async (req, res) => {
    try {
      let id = req.query.params;
      let transaction = await Transaction.where({ 'id': id }).save(
        { ...req.body },
        { patch: true }
      );
      res.json(transaction)
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message ? { error: e.message } : e)
    }
  },

  delete: async (req, res) => {
    try {
      let id = req.query.params;
      let transaction = await Transaction.where({ 'id': id }).destroy();
      res.json(transaction)
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message ? { error: e.message } : e)
    }
  }




};