const request = require('../utils/request');

function getUserProfiles() {
  return new Promise((resolve, reject) => {
    request({
      url: 'https://slack.com/api/users.list',
      method: 'GET',
      params: {
        token: process.env.SLACK_ACCESS_TOKEN,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(resp => {
      if (resp.ok) {
        resolve(resp.members.map(member => member.profile));
      } else {
        reject(resp.error);
      }
    });
  });
}

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
        'Content-Type': 'application/x-www-form-urlencoded',
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
