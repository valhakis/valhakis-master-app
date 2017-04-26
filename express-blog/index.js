const spawn = require('child_process').spawn;

const options = {
   stdio: 'inherit'
};

const spawns = [
   spawn('webpack', ['--watch'], options),
   spawn('nodemon', ['server.js'], options)
];

spawns.forEach(function(spawn) {
});
