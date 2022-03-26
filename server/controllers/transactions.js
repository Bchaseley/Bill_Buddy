const Transaction = global.Models.Transaction;
const User = global.Models.User;
const _ = require("lodash");

module.exports = {

  readAll: async (req, res) => {
    try {
      const user_id = _.get(req, ["_jwt", "id"]);
      let transactions = await Transaction.where('user_id', user_id).fetchAll();
      res.status(200).json(transactions);
    } catch (e) {
      console.log(e);
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  read: async (req, res) => {
    try {
      let name = _.pick(req.body, ["name"]);
      let transaction = await Transaction.where('name', name).fetch();
      res.status(200).json(transaction);
    } catch (e) {
      res.status(500).json(e.message ? { error: e.message } : e);
    }
  },

  search: async (req, res) => {
    if (req.query.name) {
      try {
        let name = req.query.name;
        let transactions = await Transaction.where("name", "LIKE", `%${name}%`).fetchAll()
        res.status(200).json(transactions);
      } catch (e) {
        console.log(e);
        res.status(500).json(e.message ? { error: e.message } : e);
      }
    } else {
      try{
        let datePaid = req.query.datePaid;
        let transactions = await Transaction.where("date_paid", "LIKE", `%${datePaid}%`).fetchAll()
        res.status(200).json(transactions);
      }catch (e) {
        console.log(e);
        res.status(500).json(e.message ? { error: e.message } : e);
      }
    }

  },

  create: async (req, res) => {

    try {
      const user_id = _.get(req, ["_jwt", "id"]);
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