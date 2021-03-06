'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/', controller.index);
router.post('/create', controller.create);

module.exports = router;

