var movies = require('../controllers/movies.js');

module.exports = function (app) {

  app.post('/movies/create', function (req, res) {
    movies.create(req, res);
  });

};