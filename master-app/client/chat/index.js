import routes from './chat.routes';

import ChatDirective from './chat.directive';

var mod = angular.module('app.chat', []);

mod.directive('chatDirective', ChatDirective);

mod.config(routes);

export default mod.name;
