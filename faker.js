const faker = require('faker');
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

class Person {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.age = Math.floor(100 * Math.random());
    this.username = faker.internet.userName();
    this.shortBio = faker.name.jobType();
    this.streetAddress = faker.address.streetAddress();
    this.zip = faker.address.zipCode();
    this.city = faker.address.city();
    this.country = faker.address.country();
    this.phone = faker.phone.phoneNumber();
  }
}

for (let i = 0; i < 100; i++) {
  const myPerson = new Person();
  const { firstName, lastName, email, age, username, shortBio, streetAddress, zip, city, country, phone } = myPerson;
  const newPerson = new User({ firstName, lastName, email, age, username, shortBio, streetAddress, zip, city, country, phone });
  newPerson.save().then(() => console.log('saved'));
}