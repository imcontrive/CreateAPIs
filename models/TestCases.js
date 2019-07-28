// Require mongoose:
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create the instance of schema
var testCase = new Schema({
  kata_id: {
    type: Schema.Types.ObjectId,
    ref:"",
    required: true,
  },
  params:{
    type: [String],
    default: ""
  },
  output: {
    type: String,
    default: ""
  },
}, {timestamps: true})



module.exports = mongoose.model('TestCase', testCase);