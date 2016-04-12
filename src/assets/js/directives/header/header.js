(function(angular) {
  var app = angular.module('smartassistant');

  app.controller('HeaderCtrl', ['$scope', '$http', function($scope, $http) {

  }]);

  app.directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/directives/header/header.html',
      controller: 'HeaderCtrl'
    };
  });

})(window.angular);
