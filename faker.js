const faker = require("faker");
const User = require("./schema");
const mongoose = require("mongoose");
const db = mongoose.connection;

class Person {
  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.email = faker.internet.email();
    this.age = Math.floor(82 * Math.random() + 18);
    this.username = faker.internet.userName();
    this.shortBio = faker.name.jobType();
    this.streetAddress = faker.address.streetAddress();
    this.streetNumber = this.streetAddress.split(" ")[0];
    this.streetName = this.streetAddress.split(" ").slice(1).join(" ");
    this.zip = faker.address.zipCode();
    this.city = faker.address.city();
    this.country = faker.address.country();
    this.phone = faker.phone.phoneNumber();
  }
}

exports.generateDB = () => {
  db.dropCollection("users");
  for (let i = 0; i < 100; i++) {
    const myPerson = new Person();
    const {
      firstName,
      lastName,
      email,
      age,
      username,
      shortBio,
      streetNumber,
      streetName,
      zip,
      city,
      country,
      phone
    } = myPerson;
    const newPerson = new User({
      firstName,
      lastName,
      email,
      age,
      username,
      shortBio,
      address: {
        streetNumber,
        streetName,
        zip,
        city,
        country
      },
      phone
    });
    newPerson.save().then(() => console.log("saved"));
  }
}
