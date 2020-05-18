const express = require('express');
const routes = express.Router();
const DevController = require('./controller/DevController.js');

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});
routes.post('/devs', DevController.store);

module.exports = routes;
