module.exports = function(app) {
   var item = require('../controllers/item.controller');

   app.route('/api/items')
      .get(item.all_items)
      .post(item.create_item)

   app.route('/api/items/:itemId')
      .get(item.single_item)
      .put(item.update_item)
      .delete(item.delete_item)
};
