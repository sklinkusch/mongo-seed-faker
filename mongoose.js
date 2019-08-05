const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/faker', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  username: String,
  shortBio: String,
  streetAddress: String,
  zip: String,
  city: String,
  country: String,
  phone: String
})

const User = mongoose.model('User', userSchema);

exports.getUserInfo = (req, res) => {
  console.log(req.params);
  // User.findById(id, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(res);
  //   }
  // });
}