(function(angular) {
  var app = angular.module('smartassistant');

  app.controller('FooterCtrl', ['$scope', '$http', function($scope, $http) {

  }]);

  app.directive('footer', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/directives/footer/footer.html',
      controller: 'FooterCtrl'
    };
  });

})(window.angular);
