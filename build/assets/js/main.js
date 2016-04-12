(function(angular) {


  var app = angular.module('tim');

  app.controller('MainCtrl', ['$scope', 'UserService', function($scope, UserService) {
    $scope.loggedIn = false;

    $scope.email = 'dominik@creativebrains.net';
    $scope.password = '123';

    $scope.login = function(email, password) {
      UserService.login(email, password, function(user) {
        $scope.loggedIn = true;
        $scope.firstName = user.firstName;
      })
    };

    $scope.login($scope.email, $scope.password)
  }]);

  app.directive('main', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/main.html',
      controller: 'MainCtrl'
    };
  });

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oYW5ndWxhcikge1xuXG5cbiAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0aW0nKTtcblxuICBhcHAuY29udHJvbGxlcignTWFpbkN0cmwnLCBbJyRzY29wZScsICdVc2VyU2VydmljZScsIGZ1bmN0aW9uKCRzY29wZSwgVXNlclNlcnZpY2UpIHtcbiAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcblxuICAgICRzY29wZS5lbWFpbCA9ICdkb21pbmlrQGNyZWF0aXZlYnJhaW5zLm5ldCc7XG4gICAgJHNjb3BlLnBhc3N3b3JkID0gJzEyMyc7XG5cbiAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgIFVzZXJTZXJ2aWNlLmxvZ2luKGVtYWlsLCBwYXNzd29yZCwgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAkc2NvcGUuZmlyc3ROYW1lID0gdXNlci5maXJzdE5hbWU7XG4gICAgICB9KVxuICAgIH07XG5cbiAgICAkc2NvcGUubG9naW4oJHNjb3BlLmVtYWlsLCAkc2NvcGUucGFzc3dvcmQpXG4gIH1dKTtcblxuICBhcHAuZGlyZWN0aXZlKCdtYWluJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJy9hc3NldHMvanMvbWFpbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ3RybCdcbiAgICB9O1xuICB9KTtcblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvbWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
