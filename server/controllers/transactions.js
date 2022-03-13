const Transaction = global.Models.Transaction;
const User = globals.Models.User;

module.exports = {

  readAll: async (req, res) => {
    let id = req._jwt.user_id;

    try {
      let user = await new User({id}).fetch({ withRelated: ["transactions"] });
      let transactions = user.related("transactions");
      res.status(200).json(transactions);
    }catch(e) {
      res.status(500).json({ error: e });
    }
  },




};