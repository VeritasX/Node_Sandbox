const express = require('express');
const expressValidator = require('express-validator');
const app = express();
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(expressValidator());
app.use('/', routes);

module.exports = app;
