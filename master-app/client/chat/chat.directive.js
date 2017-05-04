import ChatController from './chat.controller';

function ChatDirective() {
   return {
      template: require('./chat.directive.html'),
      controller: ChatController,
      controllerAs: 'vm'
   };
}

export default ChatDirective;
