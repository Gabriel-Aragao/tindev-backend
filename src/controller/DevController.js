const axios = require('axios');
const Dev = require('../model/Dev');

module.exports = {
  async index (req, res) {
    const { user } = req.headers;
    if (!user) {
      const devs = await Dev.find();
      const ids = [];
      for (i of devs) {
        ids.push({ id: `${i._id}`, username: `${i.user}` });
      }
      return res.json(ids);
    }

    const logegdDev = await Dev.findById(user);

    const devs = await Dev.find(
      {
        $and: [
          { _id: { $ne: user } },
          { _id: { $nin: logegdDev.likes } },
          { _id: { $nin: logegdDev.dislikes } }
        ]
      }
    );

    return res.json(devs);
  },

  async store (req, res) {
    const username = req.body.username;

    const userexists = await Dev.findOne({ user: username });

    if (userexists) {
      return res.json(userexists);
    }
    const gitResponse = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = gitResponse.data;

    const dev = await Dev.create({
      name: name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
