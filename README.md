# mongo-seed-faker

This API was created by Stefan Klinkusch at Digital Career Institute in Berlin, Germany.

## Features

It consists of
- a fake person generator using [faker.js](https://npmjs.com/package/faker.js) providing
  - first name
  - last name
  - username
  - age
  - email
  - address:
    - street name
    - street number
    - zip code
    - city
    - country
  - phone number
  - short bio (job type)
- an API showing all of the current fake identities in JSON format: [https://localhost:3000/api](https://localhost:3000/api)
- an API to search for a given user ID and returning the data in JSON format: [https://localhost/user/:userID](https://localhost/user/:userID)
- two APIs returning a working webpage using [express-handlebars](https://npmjs.com/package/express-handlebars):
  - one API to show all users: [https://localhost:3000](https://localhost:3000)
  - one API to show detailed user information for a given ID: [https://localhost:3000/users/:userID](https://localhost:3000/users/:userID)