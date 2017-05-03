var item = require('../controllers/item.controller');

var path = require('path');

var multer = require('multer');
var upload = multer({ dest: path.join(__dirname, '../../uploads') });

module.exports = function(app) {
   app.get('/items', item.render_index);
   app.get('/items/new', item.render_new);
   app.post('/items/create', item.create_item);
   app.delete('/items/:itemId', item.delete_item);
   app.get('/items/delete/:itemId', item.delete_item);
};
