var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ItemSchema = new Schema({
   name: {
      type: String,
      Required: 'The name is required.'
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

module.exports = mongoose.model('Item', ItemSchema);
