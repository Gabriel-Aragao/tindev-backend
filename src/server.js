const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://dba_tindev:SonOfAnton@omnistack8-dodzy.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(
  bodyParser.urlencoded({
    extended: true
  })
);
server.use(bodyParser.json());
server.use(routes);

server.listen(3333);
