class Menu {
   constructor() {
      this.xHover = document.createElement('div');
      this.xCloseButton = document.createElement('button');

      this.xCloseButton.innerText = 'Close menu.';
      this.xCloseButton.className = 'btn-close btn btn-default btn-xs';

      this.xCloseButton.onclick = () => {
         this.xHover.classList.remove('is-hidden');
         this.container.classList.remove('is-toggled');
      };

      this.xHover.id = 'my-menu-x-hover';
      document.body.appendChild(this.xHover);

      this.xHover.onmouseover = () => {
         // console.log('mouse is over');
         this.container.classList.add('is-toggled');
         this.xHover.classList.add('is-hidden');
      };

      this.xHover.onmouseout = () => {
         // console.log('mouse is out');
         // this.container.classList.remove('is-toggled');
      };

      this.container = document.createElement('div');
      this.container.appendChild(this.xCloseButton);
      this.ul = document.createElement('ul');
      this.container.appendChild(this.ul);
      this.container.className = 'menu';

      document.body.appendChild(this.container);
   }
   link(name, addr) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.innerText = name;
      a.href = addr;
      li.appendChild(a);
      this.ul.appendChild(li);
   }
}
export default Menu;
