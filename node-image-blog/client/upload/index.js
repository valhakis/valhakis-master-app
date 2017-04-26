var api = 'http://192.168.0.2:4000';

class Upload {
   constructor(id) {
      var form = document.getElementById(id);

      form.onsubmit = function(event) {
         event.preventDefault();

         var file = this.elements.image.files[0];

         var fd = new FormData();

         fd.append('file', file);

         var xhr = new XMLHttpRequest();

         xhr.onprogress = function() {
            console.log('LOADING');
         };

         xhr.onload = function() {
            console.log('DONE');
         };

         xhr.onreadystatechange = function() {
            console.log(`Ready state has been changed to ${this.readyState} and status is ${this.status}.`);
         };

         xhr.open('POST', api + '/upload', true);

         //xhr.upload.onprogress = function(event) {
            //if (event.lengthComputable) {
               //var percentComplete = (event.loaded / event.total) * 100;
               //console.log(`${percentComplete}% uploaded`);
            //}
         //};

         xhr.onload = function() {
            console.log('xhr on load');
            if (this.status == 200) {
               var response = JSON.parse(this.response);

               console.log('Response: ');
            }
         };

         xhr.send(fd);

         console.log(`Form has been submitted.`);
         return false;
      };

      this.form = form;
   }
}

module.exports = Upload;
