const axios = require('axios');
const configs = require('../configs');

const instance = axios.create({
  baseURL: configs.apiBase,
  timeout: 1000
});

module.exports = { instance };
