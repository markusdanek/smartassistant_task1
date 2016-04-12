(function(angular) {
  var app = angular.module('tim');

  app.controller('LoginCtrl', ['$scope', 'UserService', '$http', 'baseUrl', function($scope, UserService, $http, baseUrl) {
		
  }]);

  app.directive('login', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/directives/login/login.html',
      controller: 'LoginCtrl'
    };
  });

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvZGlyZWN0aXZlcy9sb2dpbi9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oYW5ndWxhcikge1xuICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3RpbScpO1xuXG4gIGFwcC5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBbJyRzY29wZScsICdVc2VyU2VydmljZScsICckaHR0cCcsICdiYXNlVXJsJywgZnVuY3Rpb24oJHNjb3BlLCBVc2VyU2VydmljZSwgJGh0dHAsIGJhc2VVcmwpIHtcblx0XHRcbiAgfV0pO1xuXG4gIGFwcC5kaXJlY3RpdmUoJ2xvZ2luJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJy9hc3NldHMvanMvZGlyZWN0aXZlcy9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnXG4gICAgfTtcbiAgfSk7XG5cbn0pKHdpbmRvdy5hbmd1bGFyKTtcbiJdLCJmaWxlIjoiYXNzZXRzL2pzL2RpcmVjdGl2ZXMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
