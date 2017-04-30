var form = document.getElementById('upload-name-form');

var api = 'http://192.168.0.2:4000';

form.onsubmit = function(event) {
   event.preventDefault();

   var xhr, name, fd;

   xhr = new XMLHttpRequest();

   name = this.elements.name.value;

   fd = new FormData();
   fd.append('name', name);

   console.log(name);

   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
         console.log(xhr.responseText);
      }
   };

   xhr.open('POST', `${api}/name/add`, true);
   xhr.send(fd);

   console.log('Uploading ...');

   return false;
};

