var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */

router.use('*.*', express.static(path.resolve(__dirname, '../../client/build')));

router.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
});

module.exports = router;
