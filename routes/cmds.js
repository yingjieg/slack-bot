const express = require('express');
const router = express.Router();

const { addMessage } = require('../services/message');
const { notifyUser } = require('../services/slack');

router.post('/', async (req, res, next) => {
  try {
    const msg = await addMessage(req.body);
    notifyUser('UL5N7FQP5', msg.text);

    res.sendStatus(200);

    console.log(msg);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
