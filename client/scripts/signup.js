angular.module('app', ['ngRoute'])
  .config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/signup', {
          templateUrl: '/templates/signup.html'
        }).
        // when('/signup', {
        //   templateUrl: '<phone-detail></phone-detail>'
        // }).
        otherwise('/index');
    }
  ]);