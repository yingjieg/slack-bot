const express = require('express');
const router = express.Router();

const eventEmitter = require('../events');
const { addMessage } = require('../services/message');
const { notifyUser } = require('../services/slack');

router.post('/', async (req, res, next) => {
  try {
    const { token } = req.body;
    if (token !== process.env.SLACK_VERIFICATION_TOKEN) {
      res.status(403).json({
        error: 'permission denied!',
      });
      return;
    }

    const msg = await addMessage(req.body);

    eventEmitter.emit('slack-notify', req.body.command, msg);
    eventEmitter.emit('slack-new-message', msg);

    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
