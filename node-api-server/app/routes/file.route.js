var file = require('../controllers/file.controller.js');
module.exports = function(app) {
   app.get('/files', file.render_index);
   app.get('/files/new', file.render_new);
   app.post('/files/create', file.create_file);
   app.get('/files/delete/:fileId', file.delete_file);
};
