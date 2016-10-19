angular.module('generator', [])
  .controller('GeneratorCtrl', function($scope, Generate) {
    $scope.getMenus = function() {
      Generate.getBeer().then(function(resp) {
        console.log('$$$$$$$$$$$$$$$$$$' ,resp)

        var brewery = resp.data.data;
        $scope.brewery = brewery.name;
        $scope.established = brewery.established;
        $scope.description = brewery.description;

      })
    }
  })

  .factory('Generate', function($http) {
    var getBeer = function() {
      return $http({
        method: 'GET', 
        url: '/api/beers'
      }).then(function(resp) {
        return resp;
      })
    }
    return {
      getBeer: getBeer
    }
  })
