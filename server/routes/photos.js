const express = require('express');
const router = express.Router();
const cloudStorage = require('../services/cloud-storage');

/* GET users listing. */
router.get('/', function(req, res, next) {
  cloudStorage.getRandomFileUrl().then(function(url) {
    res.json({ url: url });
  });
});

module.exports = router;
