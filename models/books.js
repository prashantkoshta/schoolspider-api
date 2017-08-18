var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var booksSchema = mongoose.Schema({
    "_id" : ObjectId,
});
module.exports = mongoose.model('books', booksSchema);