import './index.scss';

import Menu from '../app2/Menu.js';
import Message from './Message';

// Menu
var menu = new Menu();
menu.link('Home', '/');

var Button = document.createElement('button');
Button.innerText = 'Display date and time';

Button.onclick = function(event) {
   event.preventDefault();

   var message = new Message(Date());

   console.log('Welcome hooman');
};
document.body.appendChild(Button);

