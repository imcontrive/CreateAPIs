var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  questions: {
    question:{
      type: String,
      default: "",
    },
    options: {
        type: Object,
        default: ""
      },
    description: {
      type: String,
      default: ""
    }
  },
}, {timestamps: true})

module.exports = mongoose.model('Question', questionSchema);