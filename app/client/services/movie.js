app.factory('Movie', function($http, $rootScope) {

	var factory = {};

	factory.getMovie = function(input) {
		$http.get("http://www.omdbapi.com/?t=" + input.title + "&tomatoes=true&plot=full")
			.success(function(res) {
				$http.get("http://www.omdbapi.com/?t=" + input.title + "&tomatoes=true&plot=short")
					.success(function(res2) {
						console.log("RES", res);
						input.director = res.Director;
						input.release_date = res.Released;
						input.rated = res.Rated;
						input.title = res.Title;
						input.images = res.Poster;
						input.plot = res.Plot;
						input.synopsis = res2.Plot;
						input.actors = res.Actors;
						input.production_company = res.Production;
						input.runtime = res.Runtime;
						input.imdb_rating = res.imdbRating;
						input.metascore_rating = res.Metascore;
						input.rt_rating = res.tomatoRating;
						input.rt_overall = res.tomatoImage;
						input.rt_consensus = res.tomatoConsensus;
						input.rt_fresh = res.tomatoFresh;
						input.rt_rotten = res.tomatoRotten;

						$rootScope.$broadcast('setNewMovie', input);
					});
			});
	};

	factory.createMovie = function(input) {
		$http.post('/movies/create/', input).success(function(output) {
			console.log("OUTPUT", output);
		});
	};

	return factory;

});