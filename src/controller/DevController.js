const axios = require('axios');
const Dev = require('../model/Dev');

module.exports = {
  async store (req, res) {
    // BUG promisses com mongoose
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
