require('./sass/index.scss');
console.log('[webpack-canvas-app] loaded');

var Console = require('./console');

var terminal = new Console();

terminal.log('message');

var object = {
   title: 'this is the title',
   body: 'this is the  body'
};

var message = {
   body: "this is the message"
};

terminal.log(object);
terminal.log(message);
