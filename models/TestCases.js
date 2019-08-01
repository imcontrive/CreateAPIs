// Require mongoose:
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create the instance of schema
var testCase = new Schema({
  kata_id: {
    type: Schema.Types.ObjectId,
    ref:"Kata",
    required: true,
  },
  params:[{
    type: String,
  }],
  output: {
    type: String
  },
}, {timestamps: true})



module.exports = mongoose.model('TestCase', testCase);