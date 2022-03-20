const Transaction = global.Models.Transaction;
const User = global.Models.User;
const _ = require("lodash");

module.exports = {

  readAll: async (req, res) => {
    try {
      const user_id = req._jwt.id;
      let transactions = await Transaction.where('user_id', user_id).fetchAll();
      console.log(transactions);
      res.status(200).json(transactions);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  read: async (req, res) => {
    try {
      let name = _.pick(req.body, ["name"]);
      let transaction = await new Transaction({ 'name': name }).fetch();
      res.status(200).json(transaction);
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  search: async (req, res) => {
    try {
      console.log(req.body);
      let name = _.pick(req.body, ["name"]);
      console.log(name);
      let transactions = await Transaction.where( 'name', name ).fetchAll();
      console.log(transactions);
      res.status(200).json(transactions);
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  create: async (req, res) => {
    let user_id = req._jwt.id;
    try {
      let values = _.pick(req.body, ["name", "amount", "date_paid"]);
      values.user_id = user_id;
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