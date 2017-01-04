var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = require('../helpers/connection');

autoIncrement.initialize(connection);

var articleSchema = new Schema({
    title: String,
    author: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
    image: String
});

articleSchema.plugin(autoIncrement.plugin, 'article');
var article = connection.model('article', articleSchema);

module.exports = article;