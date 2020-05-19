const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;

    const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiresponse.data;

    console.log(name, avatar_url, bio, github_username);
    
    return response.json({ message: 'Hello OmniStack' });
});

module.exports = routes;

