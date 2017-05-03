var mongoose = require('mongoose')
var Schema = mongoose.Schema

var FileSchema = new Schema({
   uri: {
      type: String,
      Required: 'Uri is required.'
   },
   originalname: {
      type: String,
      Required: 'Original name is required.'
   },
   encoding: {
      type: String,
      Required: 'Encoding is required.'
   },
   mimetype: {
      type: String,
      Required: 'Mimetype is required.'
   },
   destionation: {
      type: String,
      Required: 'Destination is required.'
   },
   filename: {
      type: String,
      Required: 'Filename is required.'
   },
   path: {
      type: String,
      Required: 'Path is required.'
   },
   size: {
      type: String,
      Required: 'Size is required'
   },
   created_at: {
      type: Date,
      default: Date.now
   },
   status: {
      type: [{
         type: String,
         enum: ['pending', 'ongoing', 'completed']
      }],
      default: 'pending'
   }
})

module.exports = mongoose.model('File', FileSchema);
