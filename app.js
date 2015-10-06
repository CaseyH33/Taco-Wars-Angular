var tacoWars = angular.module('tacoWars', ['ui.router']);

tacoWars.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: "",
    views: {}
  });
});
