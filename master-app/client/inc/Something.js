var element = document.getElementById('something');

var form = element.getElementsByTagName('form')[0];

var createDbButton = document.getElementById('something-create-db-btn');
var deleteDbButton = document.getElementById('something-delete-db-btn');

deleteDbButton.onclick = function() {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
      if (xhr.status == 200 && xhr.readyState == 4) {
         console.log(xhr.responseText);
      } else if (xhr.status == 500 && xhr.readyState == 4) {
         console.log(xhr.responseText);
      }
   };
   xhr.open('GET', `${MY.host}/api/something/delete/db`, true);
   xhr.send(null);
};

createDbButton.onclick = function() {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
      if (xhr.status == 200 && xhr.readyState == 4) {
         console.log(xhr.responseText);
      } else if (xhr.status == 500 && xhr.readyState == 4) {
         console.log(xhr.responseText);
      }
   };
   xhr.open('GET', `${MY.host}/api/something/create/db`, true);
   xhr.send(null);
};

form.onsubmit = function(event) {
   event.preventDefault();

   var body = form.elements.body.value;

   var data = {
      body: body
   };

   var xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
         console.log(xhr.responseText);
      }
   };

   xhr.open('POST', `${MY.host}/api/something`, true);
   xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

   xhr.send(JSON.stringify(data));

   console.log(body);

   return false;
};
