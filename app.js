var tacoWars = angular.module('tacoWars', ['ui.router']);

tacoWars.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '',
    templateUrl: 'partials/home.html',
  });


  $stateProvider.state('game', {
    url: '/game',
    templateUrl: 'partials/game.html',
    controller: 'GamesCtrl'
  });


  // displays pop window
  // $stateProvider.state("buyModal", {
  //   url: "/:tacoId",
  //   templateUrl: "partials/inventory.html",
  //   controller: ["TacoCtrl", "ModalCtrl", "ModalInstanceCtrl"]
  // });
});
