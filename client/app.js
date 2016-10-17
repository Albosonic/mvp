angular.module('app', ['ngRoute', 'content'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/content', {
        templateUrl: '/templates/content.html',
        controller: 'ContentCtrl'
      })
  })