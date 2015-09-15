app.controller('Movies', function ($scope, Movie) {

  $scope.newMovie = {};

  $scope.getMovie = function () {
    Movie.getMovie($scope.newMovie);
  };

  $scope.$on('setNewMovie', function (e, data) {
    console.log("data", data);
    $scope.newMovie = data;
  });

});