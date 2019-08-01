// Require mongoose:
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create the instance of schema
var kataSchema = new Schema({
  kata: {
    type: String,
  },
  level:{
    type: Number,
    enum: [0, 1, 2, 3, 4, 5]
  },
  description: {
    type: String,
  },
  code: {
    type: String,
  },
  testCase: [{
    type: Schema.Types.ObjectId,
    ref: "TestCase"
  }],
}, {timestamps: true})



module.exports = mongoose.model('Kata', kataSchema);