const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String
});

const User = mongoose.model['user', UserSchema];

module.exports = User;
