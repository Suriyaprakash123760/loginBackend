const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    producer:String,
    director:String,
    stars:String,
    singer:String,
    music_director:String,
    rating: Number,
    paragraph: String,
    date: Date,
    hours: String,
    card_image: String,
    banner_image:String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
