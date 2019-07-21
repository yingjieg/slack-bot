const axios = require('axios');

const instance = axios.create({
  responseType: 'json',
});


instance.interceptors.response.use(
  res => res.data,
  err => {
    throw new Error(err.response.data.message);
  }
);

module.exports = instance;
