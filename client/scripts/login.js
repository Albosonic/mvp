angular.module('login', [])
  .controller('LoginCtrl', function($scope, $location) {
    $scope.login = function() {
      $location.path('/content');
    }
  })