var express = require('express');
var router = express.Router();

var Kata = require('../models/Kata');

var auth = require('../utils/verifyToken');
router.use(auth.verifyToken);

// List all kata
router.get('/', (req, res) => {
  // fetch  all questions from database and send it in response
  Kata.find({}, (err, kata) => {
    if(err) res.status(500).json(err);
    res.status(200).json({ success: true, kata: kata})
  })
})

// create question
router.post('/', (req, res) => {
  // fetch question data in req.body
  // save it to database using model
  Kata.create(req.body, (err, kata) => {
    if(err) return res.json(err);
    res.status(201).json({kata: kata});
  })
})

// fetch single question
router.get('/:id', (req, res) => {
  // fetch question details from database using id and send it in response
  var id = req.params.id;
  Kata.findById(id, (err, kata) => {
    if(err) return res.json(err);
    res.status(201).json({kata: kata});
  })
})

// Update a question
router.put('/:id', (req, res) => {
  // capture updated data using req.body
   // update question
  var id = req.params.id;
  Kata.findByIdAndUpdate(id,req.body,{new: true} ,(err, kata) => {
    if(err) return res.json(err);
    res.status(201).json({kata: kata})
  })
})

// delete question
router.delete('/:id', (req, res) => {
  // delete a question 
  var id = req.params.id;
  Kata.findByIdAndRemove(id,req.body ,(err, kata) => {
    if(err) return res.json({success: false,message: "server error"});
    res.status(201).json({kata: kata});
  })
})


module.exports = router;