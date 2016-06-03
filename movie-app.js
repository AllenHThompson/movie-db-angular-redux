var API_KEY = 'fec8b5ab27b292a68294261bb21b04a5';

var app = angular.module('movie-app', ['ngRoute']);

app.config(function($routeProvider) {
     $routeProvider
     .when('/', {
          controller: 'MainController',
          templateUrl: 'main.html'
     })
     .when('/:movieId', {
          controller: 'DetailsController',
          templateUrl: 'details.html'
     })
});

app.controller('MainController', function($scope, $http) {
     $http({
          url: 'http://api.themoviedb.org/3/movie/now_playing',
          params: {
               api_key: API_KEY
          }
     })
     .success(function(data) {
          $scope.movies = data.results;
          console.log($scope.movies);
     });
});

app.controller('DetailsController', function($scope, $http, $routeParams) {
     var movieId = $routeParams.movieId;
     $scope.movieId = movieId;
     var url = 'http://api.themoviedb.org/3/movie/' + movieId;
     $http({
          url: url,
          params: {
               api_key: API_KEY
          }
     })
     .success(function(data) {
          $scope.movie = data;
          console.log(data);
     });
})
