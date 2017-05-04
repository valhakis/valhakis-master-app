import './app.scss';
import navbar from './components/navbar/navbar.component';
import about from './about/about';

import routes from './app.routes';

var App = angular.module('App', ['firebase', navbar, 'ui.router', about])
   .config(routes);
