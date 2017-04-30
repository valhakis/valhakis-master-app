import './sass/main.scss';

import Message from './Message';
import Menu from './Menu.js';

var menu = new Menu();

menu.link('Home', '/');
menu.link('Link', '/');
menu.link('Link', '/');
menu.link('Link', '/');

// var message = new Message('Redirecting to index page');

var timeoutID;

var container = document.createElement('div');

var canvas = document.createElement('canvas');
var textCanvas = document.createElement('canvas');

var ctx = textCanvas.getContext('2d');

ctx.save();

ctx.translate(100, 100);

ctx.beginPath();
ctx.moveTo(10, 5);
ctx.lineTo(0, 0);
ctx.lineTo(5, 10);
ctx.moveTo(0, 0);
ctx.lineTo(15, 15);
ctx.stroke();

ctx.restore();

ctx.fillText('Message', 10, 10);


container.appendChild(canvas);
container.appendChild(textCanvas);

document.body.appendChild(container);


canvas.addEventListener('click', function() {
   console.log('Redirecting to index page');

   var message = new Message('Redirecting to index page, press on the message to cancel.');

   message.click(function() {
      console.log('clicked on the message');
      clearTimeout(timeoutID);
      message.destroy();
   });

   timeoutID = setTimeout(function() {
      window.location = '/';
   }, 5000);
});
