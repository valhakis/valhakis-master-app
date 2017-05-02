const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/', controller.all);
router.get('/', controller.index);

router.post('/', controller.create);
router.get('/create/db', controller.create_db);
router.get('/delete/db', controller.delete_db);

module.exports = router;

