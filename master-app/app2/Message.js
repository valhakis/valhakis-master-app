class Message {
   constructor(msg) {
      var container = document.createElement('div');

      container.className = 'message';
      container.innerText = msg; 

      document.body.appendChild(container);
      this.container = container;
   }

   click(callback) {
      var container = this.container;

      container.addEventListener('click', function() {
         callback();
      });
   }

   destroy() {
      var container = this.container;

      document.body.removeChild(this.container);
   }
}

export default Message;
