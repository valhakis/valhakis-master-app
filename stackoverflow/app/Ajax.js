var xProgress = document.createElement('progress');

document.body.appendChild(xProgress);

var xhr = new XMLHttpRequest();

if (xhr.upload) {
   xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
         console.log('total:', event.total);
         console.log('loaded:', event.loaded);
         var ratio = Math.floor((event.loaded / event.total) * 100) + '%';
         console.log(ratio);
      }
   };
}

var value;

xhr.upload.onloadstart = function(event) {
   value = 0;
};

xhr.upload.onloadend = function(event) {
   value = event.loaded;
};

xhr.onabort = function() {
   console.log('Aborted...');
};

xhr.onload = function() {
   console.log('loaded');
};

xhr.onloadstart = function() {
   console.log('onload start');
};

xhr.onloadend = function() {
   console.log('onload end');
};

xhr.onprogress = function(event) {
   if (event.lengthComputable) {
      console.log('onprogress');
      console.log('total:', event.total);
      console.log('loaded:', event.loaded);
      var ratio = Math.floor((event.loaded / event.total) * 100) + '%';
      console.log(ratio);
   }
};

xhr.onreadystatechange = function() {

   // console.log(xhr);

   if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
   }
};

xhr.open('GET', 'http://192.168.0.2:4000/request');
xhr.send(new FormData());
