const express = require('express');
const app = express();
const port = 3000;
const userIDRoute = require('./router');
const { generateDB } = require('./faker');
const { allUsers } = require('./mongoose');

generateDB();

app.use('/api', (req, res) => allUsers(req, res));
app.use('/user', (req, res) => userIDRoute(req, res));

app.listen(port, () => console.log(`App listening on port ${port}`))