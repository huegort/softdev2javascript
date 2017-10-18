// User.js
var mongoose = require('mongoose');
var FilmSchema = new mongoose.Schema({
    id: Number,
    name: String,
    datePublished: Date
});
mongoose.model('Film', FilmSchema);
module.exports = mongoose.model('Film');
