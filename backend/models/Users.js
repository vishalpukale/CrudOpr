const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    mail: String,
    age: Number
});

const UserModel = mongoose.model('User_Data', UserSchema);
module.exports = UserModel;