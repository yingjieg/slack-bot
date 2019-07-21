const express = require('express');
const router = express.Router();

const eventEmitter = require('../events');
const { addMessage } = require('../services/message');
const { notifyUser } = require('../services/slack');

router.post('/', async (req, res, next) => {
  try {
    const msg = await addMessage(req.body);

    eventEmitter.emit('slack-notify', req.body);

    res.sendStatus(200);

    console.log(msg);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
