const request = require('../utils/request');

function getUserProfiles() {}

function notifyUser(targetUserId, message) {
  return new Promise((resolve, reject) => {
    request({
      url: 'https://slack.com/api/chat.postMessage',
      method: 'POST',
      params: {
        token: process.env.SLACK_ACCESS_TOKEN,
        channel: targetUserId,
        text: message,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(resp => {
      if (resp.ok) {
        resolve(resp);
      } else {
        reject(resp.error);
      }
    });
  });
}

module.exports = {
  getUserProfiles,
  notifyUser,
};
