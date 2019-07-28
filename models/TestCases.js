// Require mongoose:
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create the instance of schema
var testCases = new Schema({
  kata_id: {
    type: ObjectId(Schema.typeOf),
    default: "",
  },
  level:{
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  code: {
    type: String,
    default: ""
  },
  testCase: {
    type: String,
    default: ""
  },
}, {timestamps: true})



module.exports = mongoose.model('Kata', kataSchema);