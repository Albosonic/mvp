angular.module('content', [])
  .controller('ContentCtrl', function($scope, User) {

    $scope.addUser = function(){
      User.saveUser($scope.user);
    };
  })

  .factory('User', function($http) {
    var saveUser = function(user) {
      $http({
        method: 'POST',
        url: '/users',
        data: user
      }) 
    }
    var getUser = function(user) {
      return $http({
        method: 'GET', 
        url: '/users',
        data: user
      }).then(function(resp) {
        return resp;
      })
    }
    return {
      saveUser: saveUser,
      getUser: getUser
    }
  })