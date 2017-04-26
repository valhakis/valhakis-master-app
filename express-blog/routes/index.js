module.exports = function(app) {
   app.use('/user', require('./user'));
   app.use('/lea/css', require('./css'));
   app.use('/post', require('./post'));
   app.use('/canvas', require('./canvas'));
};
