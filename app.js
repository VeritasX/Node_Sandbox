const express = require('express');
const app = express();
const routes = require('./routes/index');
// app.use(app.router);
// routes.initialize(app);
app.use('/', routes);

module.exports = app;
