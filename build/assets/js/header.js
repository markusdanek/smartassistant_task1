(function(angular) {
  var app = angular.module('tim');

  app.controller('HeaderCtrl', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
		console.log("HeaderCtrl");
  }]);

  app.directive('header', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/header.html',
      controller: 'HeaderCtrl'
    };
  });

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihhbmd1bGFyKSB7XG4gIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndGltJyk7XG5cbiAgYXBwLmNvbnRyb2xsZXIoJ0hlYWRlckN0cmwnLCBbJyRzY29wZScsICckaHR0cCcsICdVc2VyU2VydmljZScsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsIFVzZXJTZXJ2aWNlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJIZWFkZXJDdHJsXCIpO1xuICB9XSk7XG5cbiAgYXBwLmRpcmVjdGl2ZSgnaGVhZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJy9hc3NldHMvanMvaGVhZGVyLmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0hlYWRlckN0cmwnXG4gICAgfTtcbiAgfSk7XG5cbn0pKHdpbmRvdy5hbmd1bGFyKTtcbiJdLCJmaWxlIjoiYXNzZXRzL2pzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
