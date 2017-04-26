const spawn = require('child_process').spawn;

const spawns = [
   spawn('webpack', ['watch'], {
      stdio: 'inherit'
   }),
   spawn('nodemon', ['server'], {
      stdio: 'inherit'
   })
];
