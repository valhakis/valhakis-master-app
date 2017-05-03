var multer = require('multer');
var path = require('path');

var File = require('../../api/models/file.model');

var upload = multer({
   dest: path.join(__dirname, '../../public/uploads')
}).single('file');

exports.render_index = function(req, res) {
   File.find({}, function(err, files) {
      res.render('file/index', {
         files: files
      });
   });
};

exports.render_new = function(req, res) {
   res.render('file/new');
};

exports.create_file = function(req, res) {
   upload(req, res, function(err) {
      if (err) {
         res.status(500).send({
            message: "I was unable to upload file."
         });
      } else if (!req.file) {
         res.status(500).send({
            message: "File is not set."
         });
      } else {
         var new_file = new File({
            originalname: req.file.originalname,
            encoding: req.file.encoding,
            mimetype: req.file.mimetype,
            destination: req.file.destination,
            filename: req.file.filename,
            path: req.file.path
         });
         new_file.save(function(err, file) {
            if (err) {
               res.send({
                  message: "I was unable to save file to database.",
                  error: err
               });
            } else {
               console.log(req.file);
               res.redirect('/files');
            }
         });
      }
   });
};

exports.delete_file = function(req, res) {
   File.remove({
      _id: req.params.fileId
   }, function(err, file) {
      if (err) {
         res.send({
            message: "I was unable to remove file.",
            error: err
         });
      } else {
         res.redirect('/files');
      }
   });
};
