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
function notifyHandler(payload) {
  const { user_id, user_name, command, text } = payload;

  switch (command) {
    case '/save':
      const message = `You are mentioned by @${user_name}`;
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

module.exports = {
  notifyHandler,
};
