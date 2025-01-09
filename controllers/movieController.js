const Movie = require('../models/movieModel');

// Create a new movie
exports.createMovie = (req, res) => {
    const { name,producer,director,stars,music_director, rating, paragraph, date,  hours, card_image,banner_image } = req.body;
    const movie = new Movie({ name, producer,director,stars,music_director,rating, paragraph, date,  hours, card_image,banner_image });

    movie.save()
        .then(() => res.status(201).json({ message: 'Movie added successfully' }))
        .catch((err) => res.status(500).json({ message: 'Error adding movie', error: err }));
};

// Get all movies
exports.getAllMovies = (req, res) => {
    Movie.find()
        .then((movies) => res.status(200).json(movies))
        .catch((err) => res.status(500).json({ message: 'Error fetching movies', error: err }));
};

// Get a movie by ID
exports.getMovieById = (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .then((movie) => {
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.status(200).json(movie);
        })
        .catch((err) => res.status(500).json({ message: 'Error fetching movie', error: err }));
};

// Update a movie by ID
exports.updateMovie = (req, res) => {
    const { id } = req.params;
    const { name,producer,director,stars,music_director, rating, paragraph, date,  hours, card_image,banner_image,  } = req.body;

    Movie.findByIdAndUpdate(id, { name,producer,director,stars,music_director, rating, paragraph, date,  hours, card_image,banner_image,  }, { new: true })
        .then((movie) => {
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.status(200).json({ message: 'Movie updated successfully', movie });
        })
        .catch((err) => res.status(500).json({ message: 'Error updating movie', error: err }));
};

// Delete a movie by ID
exports.deleteMovie = (req, res) => {
    const { id } = req.params;
    Movie.findByIdAndDelete(id)
        .then((movie) => {
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.status(200).json({ message: 'Movie deleted successfully' });
        })
        .catch((err) => res.status(500).json({ message: 'Error deleting movie', error: err }));
};
