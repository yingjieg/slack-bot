const express = require('express');
const router = express.Router();

const { getUserProfiles } = require('../services/slack');

router.get('/', async (req, res, next) => {
  try {
    const userProfiles = await getUserProfiles();
    res.json(userProfiles);
  } catch (e) {
    console.warn(e);
    res.json([]);
  }
});

module.exports = router;
