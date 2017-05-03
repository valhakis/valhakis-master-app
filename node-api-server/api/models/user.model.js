var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
   email: {
      type: String,
      Required: 'Email is required.'
   },
   password: {
      type: String,
      Required: 'Password is required.'
   },
   created_at: {
      type: Date,
      default: Date.now
   },
   status: {
      type: [{
         type: String,
         enum: ['normal', 'guest', 'admin', 'masater']
      }],
      default: 'normal'
   }
})

module.exports = mongoose.model('User', UserSchema);
