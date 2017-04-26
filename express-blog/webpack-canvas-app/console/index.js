class Console {
   constructor() {
      this.container = document.createElement('div');
      this.container.id = 'terminal';
      document.body.appendChild(this.container);
      this.container.addEventListener('click', (event) => {
         setTimeout(() => {
            this.log('clicked on terminal');
         });
      });
   }
   log (msg) {
      switch (typeof msg) {
         case 'string': this.logString(msg); break;
         case 'object': this.logObject(msg); break;
         default: break;
      }
      setTimeout(() => {
         this.container.scrollTop = this.container.scrollHeight;
      });
   }

   logString(msg) {
      var xMsg = document.createElement('div');
      xMsg.className = 'msg msg-string';
      xMsg.innerText = msg;
      this.container.appendChild(xMsg);
   }

   highlight(str) {
      var json = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
         var cls = 'number';
         if (/^"/.test(match)) {
            if (/:$/.test(match)) {
               cls = 'key';
            } else {
               cls = 'string';
            }
         } else if (/true|false/.test(match)) {
            cls = 'boolean';
         } else if (/null/.test(match)) {
            cls = 'null';
         }
         return '<span class="' + cls + '">' + match + '</span>';
      });
   }

   logObject(object) {
      var xMsg = document.createElement('div');
      var xPre = document.createElement('pre');
      xMsg.className = 'msg msg-object';
      xMsg.appendChild(xPre);
      xPre.innerHTML = this.highlight(JSON.stringify(object, ' ', 4));
      this.container.appendChild(xMsg);
   }
}

module.exports = Console;

function output(inp) {
   document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
}

var obj = {a:1, 'b':'foo', c:[false,'false',null, 'null', {d:{e:1.3e5,f:'1.3e5'}}]};
var str = JSON.stringify(obj, undefined, 4);

