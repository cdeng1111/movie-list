const models = require('../models/movies.js');

module.exports = {
getMovies: function(req, res) {
  models.getAll((err, result) =>{
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  } )
},

postMovies: function(req, res) {
  models.post(req, (err, result) => {
    if (err) {
      res.status(500).send(err)
    } else {
      module.exports.getMovies(req, res);
    }
  })
},

updateMovies: function(req, res) {
  models.update(req, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      module.exports.getMovies(req, res);
    }
  })
},

filterMoviesByWatch: function(req, res) {
  models.filterWatch(req, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  })
},
filterMoviesByTitleAndWatch: function(req, res) {
  models.filterTitleAndWatch(req, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  })
},

};