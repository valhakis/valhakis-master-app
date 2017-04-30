class Menu {
   constructor() {
      this.container = document.createElement('div');
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
