'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
   res.render('css/index');
});

module.exports = router;

