const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/faker", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  username: String,
  shortBio: String,
  address: {
    streetNumber: String,
    streetName: String,
    zip: String,
    city: String,
    country: String
  },
  phone: String
}, {
    strict: "throw",
    timestamps: true
  });

const User = mongoose.model("User", userSchema);
module.exports = User;
