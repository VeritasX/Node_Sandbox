const express = require('express');
const expressValidator = require('express-validator');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
require('./Schema/Entry');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: 'variables.env' });

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(expressValidator());

app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use('/', routes);

module.exports = app;
