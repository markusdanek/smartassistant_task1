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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvZGlyZWN0aXZlcy9oZWFkZXIvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihhbmd1bGFyKSB7XG4gIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc21hcnRhc3Npc3RhbnQnKTtcblxuICBhcHAuY29udHJvbGxlcignSGVhZGVyQ3RybCcsIFsnJHNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCkge1xuXG4gIH1dKTtcblxuICBhcHAuZGlyZWN0aXZlKCdoZWFkZXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2hlYWRlci9oZWFkZXIuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ3RybCdcbiAgICB9O1xuICB9KTtcblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvZGlyZWN0aXZlcy9oZWFkZXIvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
