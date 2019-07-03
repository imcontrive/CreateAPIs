var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var codeSnippetsSchema = new Schema({
  questions: [{
    question:{
      type: String,
      default: "",
    },
    code: {
      type: String,
      default:""
    },
    options: {
        type: Object,
        default: ""
      },
    answer: {
      type: Object,
    },
    description: {
      type: String,
      default: ""
    }
  }],
}, {timestamps: true})

module.exports = mongoose.model('CodeSnippets', codeSnippetsSchema);