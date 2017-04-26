console.log(`STARTING THE APPLICATION`);
var spawn = require('child_process').spawn;

var watch = require('node-watch');

var fs = require('fs');

class Spawn {
   constructor(command, args, options) {
      this.command = command;
      this.args = args;
      this.options = options;

      this.start();
   }

   start() {
      var command = this.command;
      var args = this.args;
      var options = this.options;

      var spwn = spawn(command, args, options);

      this.spwn = spwn;
   }

   restart() {
      this.spwn.kill();
      this.start();
      console.log(`Restarding spawn webpack.`);
   }
}

var spawns = {
   webpack: new Spawn('webpack', ['--watch'], {
      stdio: 'inherit'
   }),
   nodemon: new Spawn('nodemon', ['server', '--config', './server/nodemon.json'], {
      stdio: 'inherit'
   })
};

watch(__dirname + '/webpack.config.js', function(evt, name) {

   name = name.replace(__dirname + '/', '');

   spawns.webpack.restart();

   console.log(`${name} has been changed.`);
});
