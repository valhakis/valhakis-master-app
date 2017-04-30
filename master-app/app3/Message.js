class Message {
   constructor(message) {
      this.container = document.createElement('div');
      this.container.className = 'message';
      this.container.innerText = message;

      var closeButton = document.createElement('div');

      closeButton.innerHTML = '&#x274C;';
      closeButton.className = 'close-button';

      closeButton.addEventListener('click', () => {
         this.close();
      });

      this.container.appendChild(closeButton);

      document.body.appendChild(this.container);
   }

   close() {
      document.body.removeChild(this.container);
   }

}

export default Message;
