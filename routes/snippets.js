var express = require('express');
var router = express.Router();
var Snippet = require('../models/CodeSnippet');

var auth = require('../utils/verifyToken');

router.use(auth.verifyToken);

// List all questions
router.get('/', (req, res) => {
  // fetch  all questions from database and send it in response
  Snippet.find({}, (err, questions) => {
    if(err) res.status(500).json(err);
    res.status(200).json({ success: true, questions: questions})
  })
})

// create question
router.post('/', (req, res) => {
  // fetch question data in req.body
  // save it to database using model
  Snippet.create(req.body, (err, question) => {
    if(err) return res.json(err);
    res.status(201).json({question: question})
  })
})

// fetch single question
router.get('/:id', (req, res) => {
  // fetch question details from database using id and send it in response
  var id = req.params.id;
  Snippet.findById(id, (err, question) => {
    if(err) return res.json(err);
    res.status(201).json({question: question})
  })
})

// Update a question
router.put('/:id', (req, res) => {
  // capture updated data using req.body
   // update question
  var id = req.params.id;
  Snippet.findByIdAndUpdate(id,req.body,{new: true} ,(err, question) => {
    if(err) return res.json(err);
    res.status(201).json({question: question})
  })
})

// delete question
router.delete('/:id', (req, res) => {
  // delete a question 
  var id = req.params.id;
  Snippet.findByIdAndRemove(id,req.body ,(err, question) => {
    if(err) return res.json({success: false,message: "server error"});
    res.status(201).json({question: question})
  })
})


module.exports = router;
