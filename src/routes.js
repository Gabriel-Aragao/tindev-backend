const express = require('express');
const routes = express.Router();
const DevController = require('./controller/DevController');
const LikeController = require('./controller/LikeController');
const DislikeController = require('./controller/DislikeController');

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});
routes.post('/devs/new', DevController.store);
routes.post('/devs/:devId/like', LikeController.store);
routes.post('/devs/:devId/dislike', DislikeController.store);

module.exports = routes;
