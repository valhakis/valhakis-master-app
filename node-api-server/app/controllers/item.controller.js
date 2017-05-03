var Item = require('../../api/models/item.model');
var path = require('path');
var fs = require('fs');
var fse = require('fs-extra');
var request = require('request');
var mime = require('mime-types');

var download = function(uri, filename, callback) {
   request.head(uri, function(err, res, body) {
      if (err) {
         throw err;
      } else {
         console.log('content-type:', res.headers['content-type']);
         console.log('content-length:', res.headers['content-length']);

         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      }
   });
};

exports.render_index = function(req, res) {
   Item.find({}, function(err, items) {
      if (err) {
         res.send(err);
      } else {
         res.render('item/index', {
            items: items
         });
      }
   });
};

exports.render_new = function(req, res) {
   res.render('item/new');
};

exports.all_items = function(req, res) {
   Item.find({}, function(err, item) {
      if (err)
         res.send(err);
      res.json(item);
   });
};

var multer = require('multer');
var upload = multer({
   dest: path.join(__dirname, '../../public/uploads')
}).single('image');

exports.create_item = function(req, res) {
   upload(req, res, function(err) {
      if (err) {
         // multer fileupload failed
         res.send({
            message: "I was unable to upload file.",
            error: err
         });
      } else {
         var image_file_name;
         if (req.file) {
            // image from form is set
            image_file_name = req.file.filename
         } else if (req.body.imgurl) { // jshint ignore:line
            // download image from url
            // download('http://services.runescape.com/m=itemdb_oldschool/1493800227386_obj_big.gif?id=444', path.join(__dirname, '../../public') + '/example', function() {
               // console.log('downloaded');
            // });
         } else {
            image_file_name = 'no image file name';
         }
         // create a new image model object
         var new_item = new Item({
            name: req.body.name,
            image_name: image_file_name
         });
         // save new image to database
         new_item.save(function(err, item) {
            if (err)
               res.send(err);

            var imgurl = req.body.imgurl;
            var outdir = path.join(__dirname, '../../public/uploads/item');
            var outfile = outdir + '/'+ item._id;

            if (imgurl) {
               download(imgurl, outfile, function() {
                  console.log('file has been uploaded');
               });
            } else if (req.file) {
               console.log('mime', mime.extension(req.file.mimetype));
               fse.move(req.file.path, outdir + '/' + item._id, function(err) {
                  if (err) {
                     throw err;
                  }
                  console.log('file has been moved');
               });
               console.log(req.file);
            }

            res.redirect('/items');
         });
      }
   });
};

exports.single_item = function(req, res) {
   Item.findById(req.params.itemId, function(err, item) {
      if (err) 
         res.send(err);
      res.json(item)
   });
};

exports.update_item = function(req, res) {
   Item.findONeAndUpdate(req.params.itemId, req.body, {new: true}, function(err, item) {
      if (err) res.send(err);
      res.json(item);
   });
};

exports.delete_item = function(req, res) {
   Item.remove({
      _id: req.params.itemId
   }, function(err, item) {
      if (err) 
         res.send(err);
      res.redirect('/items');
      // res.json({ message: 'Item sucessfully deleted.' });
   });
};
