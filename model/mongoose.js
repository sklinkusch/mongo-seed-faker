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

exports.allUsers = async (req, res) => {
  const query = await User.find({}).exec();
  res.json(query);
}

exports.usersRendered = async (req, res) => {
  const query = await User.find({}).exec();
  res.render('home', { query });
}