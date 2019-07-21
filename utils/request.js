const axios = require('axios');

const instance = axios.create({
  responseType: 'json',
  timeout: 5000,
});


instance.interceptors.response.use(
  res => res.data,
  err => {
    throw new Error(err.response.data.message);
  }
);

module.exports = instance;
