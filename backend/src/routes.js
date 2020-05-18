const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/Devs', async (request, response) => {
    const { github_username } = request.body;

    const apiresponse = await axios.get(`https://api.github.com/user/${github_username}`);

    Console.log(response.data);
    
    return response.json({ message: 'Hello OmniStack' });
});

module.exports = routes;

