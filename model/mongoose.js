const User = require("./schema");
const { generateDB } = require("./faker");

exports.getNumberOfUsers = async () => {
  const numberOfUsers = await User.countDocuments();
  if (numberOfUsers > 0) {
    console.log("Database contains data, skip generation of identities");
  } else {
    generateDB();
  }
}

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
};

exports.usersRendered = async (req, res) => {
  const query = await User.find({}).exec();
  res.render("home", { query });
};

exports.usersID = (req, res) => {
  const { userId } = req.params;
  User.findById(userId, (error, docs) => {
    if (error) {
      console.log(error);
    } else {
      res.render("user", { user: docs });
    }
  });
};
