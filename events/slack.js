const logger = require('../utils/logger');
const { notifyUser } = require('../services/slack');

/**
 * handler for 'slack-notify' event
 *
 * @param cmd - string
 * @param payload - obj
 * {
 *   userId: string,
 *   userName: string,
 *   text: string
 * }
 */
function notifyHandler(cmd, payload) {
  const { userId, userName, text } = payload;

  switch (cmd) {
    case '/save':
      const message = `You are mentioned by @${userName}`;
      const targetUser = getMentionedUserName(text);

      notifyUser(targetUser, message).catch(err => console.error(err));
      break;
    default:
      logger.warn(`handler not found for command ${cmd}`);
  }
}

function getMentionedUserName(message) {
  const groups = message.match(/@([a-z0-9_-]*)/);

  return groups ? groups[0] : null;
}

function newMessageHandler(payload) {
  wss.clients.forEach(client => {
    client.send(JSON.stringify(payload));
  });
}

module.exports = {
  notifyHandler,
  newMessageHandler,
};
