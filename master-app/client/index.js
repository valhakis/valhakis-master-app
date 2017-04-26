import './sass/main.scss';
import NavbarDirective from './navbar';

angular.module('app', ['ui.router']);

angular.module('app').directive('navbar', NavbarDirective);

angular.module('app').config(function($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         template: require('./home/home.html')
   });
});
