const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    paragraph: String,
    date: Date,
    time: String,
    image: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
