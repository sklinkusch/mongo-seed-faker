const express = require('express');
const app = express();
const port = 3000;
const userIDRoute = require('./model/router');
const { generateDB } = require('./model/faker');
const { allUsers } = require('./model/mongoose');

generateDB();

app.use('/api', (req, res) => allUsers(req, res));
app.use('/user', (req, res) => userIDRoute(req, res));

app.listen(port, () => console.log(`App listening on port ${port}`))