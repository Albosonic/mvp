angular.module('app', ['ngRoute', 'ngMaterial', 'content'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/content', {
        templateUrl: '/templates/content.html',
        controller: 'ContentCtrl'
      })
  })