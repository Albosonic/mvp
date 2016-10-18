angular.module('content', [])
  .controller('ContentCtrl', function($scope, User) {

    $scope.hidden = false;

    $scope.hideIt = function() {
      $scope.hidden = !$scope.hidden; 
    }

    $scope.addUser = function(){
      User.saveUser($scope.user);
    };

    $scope.getDate = function() {
      var currentAnswers = [];
      currentAnswers.push($scope.user.answer1, $scope.user.answer2, $scope.user.answer3)
      User.getUsers().then(function(users) {
        for (var i = 0; i < currentAnswers.length; i++) {
          for (var j = 0; j < users.length; j++) {            
            if (users[j].answers[i] === currentAnswers[i] && users[j].name !== $scope.user.name) {
              $scope.match = 'you\'re location has been sent to ' + users[j].name + ' expect a knock at the door';
            }
          }
        }
      });
      $scope.hideIt();
    }
  })

  .factory('User', function($http) {
    var saveUser = function(user) {
      $http({
        method: 'POST',
        url: '/api/users',
        data: user
      }) 
    }

    var getUsers = function() {
      return $http({
        method: 'GET', 
        url: '/api/users',
      }).then(function(resp) {
        var users = resp.data;
        return users;
      })
    }
    return {
      saveUser: saveUser,
      getUsers: getUsers
    }
  })