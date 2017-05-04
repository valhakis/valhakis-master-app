import './blog.scss';
import routes from './blog.routes';
import NavbarDirective from './blog.nav.directive';
import BlogController from './blog.controller';

var mod = angular.module('app.myblog', []);

mod.config(routes);

mod.directive('blogNavbar', NavbarDirective);
mod.controller('BlogController', BlogController);

export default mod.name;
