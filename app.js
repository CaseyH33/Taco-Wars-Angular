var tacoWars = angular.module('tacoWars', ['ui.router']);

tacoWars.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/game.html',
    controller: 'GamesCtrl'
  });

  // displays pop window
  $stateProvider.state("inventory", {
    url: "/inventory",
    templateUrl: "partials/inventory.html",
    controller: "GamesCtrl"
  });
});
