var express = require('express');
var router = express.Router();
var Question = require('../models/Question');
var jwt = require('jsonwebtoken');

router.use(function(req,res,next){
  const token = req.headers['Authorization'] || req.headers['authorization'] || null;

  if (!token) return res.json({ message: 'unAuthorized user' });
  const BearerToken = token.split(' ');
  const headerBearer = BearerToken[1];
  jwt.verify(headerBearer, process.env.SECRET, (err, decode) => {
    if (err) return res.json({
      unVerified:true,
      message: 'Send proper token dude'
    }) 
    req.username = decode.username;
    next();
  })
})

// List all questions
router.get('/', (req, res) => {
  // fetch  all questions from database and send it in response
  Question.find({}, (err, questions) => {
    if(err) res.status(500).json(err);
    res.status(200).json({questions: questions})
  })
})

// create question
router.post('/', (req, res) => {
  // fetch question data in req.body
  // save it to database using model
  Question.create(req.body, (err, question) => {
    if(err) return res.json(err);
    res.status(201).json({question: question})
  })
})

// fetch single question
router.get('/:id', (req, res) => {
  // fetch question details from database using id and send it in response
  var id = req.params.id;
  Question.findById(id, (err, question) => {
    if(err) return res.json(err);
    res.status(201).json({question: question})
  })
})

// Update a question
router.put('/:id', (req, res) => {
  // capture updated data using req.body
   // update question
  var id = req.params.id;
  Question.findByIdAndUpdate(id,req.body,{new: true} ,(err, question) => {
    if(err) return res.json(err);
    res.status(201).json({question: question})
  })
})

// delete question
router.delete('/:id', (req, res) => {
  // delete a question 
  var id = req.params.id;
  Question.findByIdAndRemove(id,req.body ,(err, question) => {
    if(err) return res.json({success: false,message: "server error"});
    res.status(201).json({question: question})
  })
})


module.exports = router;
