'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.index);
router.post('/add', controller.add);

module.exports = router;

