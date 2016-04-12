(function(angular) {
  var app = angular.module('tim');

  app.controller('HeaderCtrl', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
		console.log("HeaderCtrl");
  }]);

  app.directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/directives/header/header.html',
      controller: 'HeaderCtrl'
    };
  });

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvZGlyZWN0aXZlcy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKGFuZ3VsYXIpIHtcbiAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0aW0nKTtcblxuICBhcHAuY29udHJvbGxlcignSGVhZGVyQ3RybCcsIFsnJHNjb3BlJywgJyRodHRwJywgJ1VzZXJTZXJ2aWNlJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgVXNlclNlcnZpY2UpIHtcblx0XHRjb25zb2xlLmxvZyhcIkhlYWRlckN0cmxcIik7XG4gIH1dKTtcblxuICBhcHAuZGlyZWN0aXZlKCdoZWFkZXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2hlYWRlci9oZWFkZXIuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ3RybCdcbiAgICB9O1xuICB9KTtcblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvZGlyZWN0aXZlcy9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
