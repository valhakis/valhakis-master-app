import ChatController from './chat.controller';

routes.$inject = ['$stateProvider'];
function routes($stateProvider) {
   $stateProvider
      .state('chat', {
         url: '/chat',
         template: require('./chat.view.html'),
         controller: ChatController
      });
}

export default routes;
