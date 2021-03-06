const { Messages, Sequelize } = require('../db/models');

function getMessages(cursor = 0, previous = false, limit = 10) {
  const where = {};
  let order = [['id', 'DESC']];
  if (cursor !== 0) {
    where['id'] = previous
      ? { [Sequelize.Op.lt]: cursor }
      : { [Sequelize.Op.gt]: cursor };

    order = previous ? [['id', 'DESC']] : [['id', 'ASC']];
  }

  return new Promise((resolve, reject) => {
    Messages.findAll({
      where,
      order,
      limit,
    })
      .then(res => {
        resolve(res);
      })
      .catch(reject);
  });
}

function addMessage(message) {
  const { user_id, user_name, text } = message;
  // TODO verify

  return new Promise((resolve, reject) => {
    Messages.create({ userId: user_id, userName: user_name, text })
      .then(res => {
        resolve(res.dataValues);
      })
      .catch(reject);
  });
}

module.exports = {
  getMessages,
  addMessage,
};
