var express = require('express');
var router = express.Router();

var Kata = require('../models/Kata');

var auth = require('../utils/verifyToken');
router.use(auth.verifyToken);

// List all kata
router.get('/', (req, res) => {
  // fetch  all katas from database and send it in response
  Kata.find({}, (err, kata) => {
    if(err) res.status(500).json(err);
    res.status(200).json({ success: true, kata: kata})
  })
})

// create kata
router.post('/', (req, res) => {
  // fetch kata data in req.body
  // save it to database using model
  Kata.create(req.body, (err, kata) => {
    if(err) return res.json(err);
    res.status(201).json({kata: kata});
  })
})

// fetch single kata
router.get('/:id', (req, res) => {
  // fetch kata details from database using id and send it in response
  var id = req.params.id;
  Kata.findById(id, (err, kata) => {
    if(err) return res.json(err);
    res.status(201).json({kata: kata});
  })
})

// Update a kata
router.put('/:id', (req, res) => {
  // capture updated data using req.body
   // update kata
  var id = req.params.id;
  Kata.findByIdAndUpdate(id,req.body,{new: true} ,(err, kata) => {
    if(err) return res.json(err);
    res.status(201).json({kata: kata})
  })
})

// delete kata
router.delete('/:id', (req, res) => {
  // delete a kata 
  var id = req.params.id;
  Kata.findByIdAndRemove(id,req.body ,(err, kata) => {
    if(err) return res.json({success: false,message: "server error"});
    res.status(201).json({kata: kata});
  })
})


module.exports = router;