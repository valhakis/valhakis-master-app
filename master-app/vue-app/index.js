import './index.scss';

var app = new Vue({
   el: '#app',
   data: {
      message: 'Welcome to hell :)'
   }
});

var app2 = new Vue({
   el: '#app-2',
   data: {
      message: `You loaded this page on ${new Date()}`
   }
});

var app3 = new Vue({
   el: '#app-3',
   data: {
      seen: true
   }
});

var app4 = new Vue({
   el: '#app-4',
   data: {
      todos: [
         { text: 'I\'m a god.' },
         { text: 'I\'m a hores.' },
         { text: 'I\'m a rabbit.'  },
      ]
   }
});

app4.todos.push({text: 'I\'m a new item.'});

var app5 = new Vue({
   el: '#app-5',
   data: {
      message: 'Hello rabbits.'
   },
   methods: {
      reverseMessage: function() {
         this.message = this.message.split('').reverse().join('');
      }
   }
});

var app6 = new Vue({
   el: '#app-6',
   data: {
      message: 'Hello hooman.'
   }
});

var app7 = new Vue({
   el: '#app-7',
   data: {
      message: 'This is the message'
   }
});

Vue.component('todo-item', {
   template: '<li>This is a todo</li>'
});
