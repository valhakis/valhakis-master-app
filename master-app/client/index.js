import './sass/main.scss';

import Menu from '../app2/Menu.js';

var menu = new Menu();

menu.link('Home', '/');
menu.link('App1', '/app1');
menu.link('App2', '/app2');
menu.link('App3', '/app3');
menu.link('App4', '/app4');

import NavbarDirective from './navbar';
import CanvasDirective from './canvas';

import WebGLModule from './webgl';

angular.module('app', ['ui.router', WebGLModule]);

angular.module('app').directive('navbar', NavbarDirective);
angular.module('app').directive('canvasApp', CanvasDirective);

angular.module('app').config(function($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         template: require('./home/home.html')
      })
      .state('canvas', {
         url: '/canvas',
         template: require('./canvas/canvas.html')
      });
});
