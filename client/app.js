angular.module('app', ['ngRoute', 'ngMaterial', 'content', 'generator', 'login'])
  .config(function($routeProvider) {
    $routeProvider
      
      .when('/content', {
        templateUrl: '/templates/content.html',
        controller: 'ContentCtrl'
      })
      .when('/generator', {
        templateUrl: '/templates/generator.html',
        controller: 'GeneratorCtrl'
      })
      .when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'LoginCtrl'
      })
  })

  

  