const User = require("./schema");

exports.getUserInfo = (req, res) => {
  const { id } = req.params;
  User.findById(id, (error, user) => {
    if (error) {
      res.json(error);
    } else {
      res.json(user);
    }
  });
};
