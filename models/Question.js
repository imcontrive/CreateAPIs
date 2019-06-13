var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  question: {
    type: String,
    required: [true, "title is required"],
    minLength: 5
  },
  options: {
    type: Object,
    required: [true]
  },
  description: String
}, {timestamps: true})

module.exports = mongoose.model('Question', questionSchema);