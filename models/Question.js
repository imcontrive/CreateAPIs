var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  question: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: ""
  },
  description: String
}, {timestamps: true})

module.exports = mongoose.model('Question', questionSchema);