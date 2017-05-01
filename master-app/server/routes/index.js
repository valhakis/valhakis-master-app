module.exports = function(app) {
   app.use('/name', require('./name'));
   app.use('/api/code', require('../api/code'));
   app.use('/api/something', require('../api/something'));
};
