/* \cm -> minimal commenter */
var api = 'http://192.168.0.2:4000';

var dom_editor = document.createElement('div');
dom_editor.id = 'editor';

document.body.appendChild(dom_editor);

var editor = ace.edit(dom_editor);
editor.$blockScrolling = Infinity;
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/javascript');

editor.setValue('this is the new value');
// var value = editor.getValue();

editor.insert(`var i = 'okei';\n`);

editor.setKeyboardHandler('ace/keyboard/vim');

editor.commands.addCommand({
   name: 'my command',
   bindKey: {
      win: 'Ctrl-L',
   },
   exec: function() {
      console.log('okei');
   }
});

editor.focus();

/*
editor.addKeyBinding({
   key: 'ctrl-s',
   exec: function() {
      console.log('ctrl s');
   }
});
*/

// console.log(value);

ace.config.loadModule('ace/keyboard/vim', function() {
   var VimApi = ace.require('ace/keyboard/vim').CodeMirror.Vim;
   VimApi.defineEx('write', 'w', function(cm, input) {

      SaveCode(editor.getValue());

      cm.ace.execCommand('save');
   });
});

var SaveCode = function(code) {
   var fd = new FormData();

   fd.append('code', code);
   fd.append('username', 'thomas');

   var xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
         console.log(xhr.responseText);
      }
   };

   xhr.open('POST', api + '/api/code', true);

   xhr.setRequestHeader('Content-Type', 'application/json');

   var data = {
      name: 'William',
      body: code
   };

   xhr.send(JSON.stringify(data));

};
// $.ajax({
// url: api + '/api/code',
// type: 'POST',
// data: {
// name: 'thomas'
// },
// success: function(data) {
// console.log('success', data.body);
// },
// // dataType: 
// }).done(function(data) {
// console.log('done', data.body);
// });
