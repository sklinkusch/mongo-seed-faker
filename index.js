const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;
const userIDRoute = require('./model/router');
const { allUsers, usersRendered, usersID, getNumberOfUsers } = require('./model/mongoose');

getNumberOfUsers();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => usersRendered(req, res));
app.get('/api', (req, res) => allUsers(req, res));
app.use('/user', (req, res) => userIDRoute(req, res));
app.get('/users/:userId', (req, res) => usersID(req, res));

app.listen(port, () => console.log(`App listening on port ${port}`))