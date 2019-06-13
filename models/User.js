var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

var userSchema = new Schema({
	firstname:{
		type: String
	},
	lastname:{
		type: String
	},
	phonenumber:{
		type: String,
		minlength: 10,
		maxlength: 12
  }, 
	dob:{
		type: Date
	},
	username: {
		type: String,
		min: 3,
		max: 16,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		min: 6,
    max: 20,
  },
	photo: {
		type: String,
		default: ""
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	score: {
		type: Number,
		default: 0
	}
}, {timestamps: true});

userSchema.pre('save', function (next) {
	console.log('pt 1', this);
  if(this.password && this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, salt);
		console.log('pt2', this)
  }
  if(this.email === process.env.EMAIL){
		console.log('check3...');
		this.isAdmin = true;
		console.log('pt3', this);
	} 
  next();
});

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync( password, this.password );
};

var User = mongoose.model("User", userSchema);

module.exports = User;
