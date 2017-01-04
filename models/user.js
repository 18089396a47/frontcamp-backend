var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = require('../helpers/connection');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose);
var user = connection.model('user', userSchema);

module.exports = user;