var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, (err, users) => {
    if(err) res.status(500).json(err);
    res.status(200).json({users: users})
  })
});

router.get('/new', function(req, res, next) {
  res.send('create new user');
});

router.post('/register', (req, res) => {
  // fetch question data in req.body
  // save it to database using model
  User.create(req.body, (err, user) => {
    console.log('pt4', user)
    if(err) return res.json(err);
    res.status(201).json({user: user})
  })
})
router.get("/login", (req,res) => {
  res.send("user Logged in ...");
})

router.post('/login', (req, res) => {
  // fetch question data in req.body
  const data = req.body;
  console.log("test user info... ",data);
  User.findOne({ email: data.email }, (err, user) => {
    if (err) return res.status(500).json({ success: false, error: "server error" });
    if(!user) {
      res.status(400).json({ success: false, error: "user not found" });
    }
    console.log(user, "user login");
    if(user){
      var result = bcrypt.compareSync(data.password, user.password); // true
      if(result){
        var token = jwt.sign({ _id: user._id }, process.env.SECRET);
        console.log(token)
        res.status(200).json({success: true,token: token})
      }else {
        res.status(400).json({success: false, message: "invalid password" });
      }
    }
  // save it to database using model
 })
})

module.exports = router;
