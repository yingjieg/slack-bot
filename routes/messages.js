const express = require('express');
const router = express.Router();

const { getMessages } = require('../services/message');

router.get('/', async (req, res, next) => {
  const { cursor, previous, limit } = req.query;
  // verify query params

  try {
    const messages = await getMessages(+cursor, previous, limit);
    res.json(messages);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
