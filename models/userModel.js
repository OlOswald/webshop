var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    trim: true,
    default: ''
  },
  hash: String,
  salt: String
});

var createSalt = function createSalt() {
  return crypto.randomBytes(16).toString('hex');
};

var createSaltedHash = function createSaltedHash(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 256, 'sha256').toString('hex');
};

userSchema.methods.setPassword = function (password) {
  this.salt = createSalt();
  this.hash = createSaltedHash(password, this.salt);
};

userSchema.methods.validPassword = function (password) {
  return this.hash === createSaltedHash(password, this.salt);
};

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');