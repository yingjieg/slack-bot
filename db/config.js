require('dotenv').config({ path: '../.env'});

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: process.env.DB_FILE_PATH || '~/db.sqlite',
  },
};
