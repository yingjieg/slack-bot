const { notifyUser } = require('../services/slack');

/**
 * handler for 'slack-notify' event
 *
 * @param payload
 * {
 *   targetUser: string,
 *   author: string,
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
      console.warn('no matched commands found!');
  }
}

function getMentionedUserName(message) {
  const groups = message.match(/@([a-z0-9_-]*)/);

  return groups ? groups[0] : null;
}

function newMessageHandler(payload) {
}

module.exports = {
  notifyHandler,
  newMessageHandler
};
