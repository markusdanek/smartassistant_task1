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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvZGlyZWN0aXZlcy9mb290ZXIvZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihhbmd1bGFyKSB7XG4gIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnc21hcnRhc3Npc3RhbnQnKTtcblxuICBhcHAuY29udHJvbGxlcignRm9vdGVyQ3RybCcsIFsnJHNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCkge1xuXG4gIH1dKTtcblxuICBhcHAuZGlyZWN0aXZlKCdmb290ZXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnL2Fzc2V0cy9qcy9kaXJlY3RpdmVzL2Zvb3Rlci9mb290ZXIuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnRm9vdGVyQ3RybCdcbiAgICB9O1xuICB9KTtcblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvZGlyZWN0aXZlcy9mb290ZXIvZm9vdGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
