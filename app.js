const cors = require('cors');
const app = require('express')();

const routes = require('./routes.js');

app.use(cors());

app.use('/', routes);

module.exports = app;
