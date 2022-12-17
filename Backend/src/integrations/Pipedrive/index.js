require('dotenv').config();

const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://api.pipedrive.com/v1',
  Headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_token: process.env.PIPEDRIVE_KEY,
  },
});
