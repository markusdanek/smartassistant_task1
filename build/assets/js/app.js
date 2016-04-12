(function(angular) {

  var app = angular.module('smartassistant', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider) {
    $locationProvider;
    $routeProvider
    .when('/', {
      templateUrl : '/assets/js/templates/home.html',
      controller  : 'HomeCtrl'
    });

  });

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihhbmd1bGFyKSB7XG5cbiAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdzbWFydGFzc2lzdGFudCcsIFsnbmdSb3V0ZSddKTtcblxuICBhcHAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAgICRsb2NhdGlvblByb3ZpZGVyO1xuICAgICRyb3V0ZVByb3ZpZGVyXG4gICAgLndoZW4oJy8nLCB7XG4gICAgICB0ZW1wbGF0ZVVybCA6ICcvYXNzZXRzL2pzL3RlbXBsYXRlcy9ob21lLmh0bWwnLFxuICAgICAgY29udHJvbGxlciAgOiAnSG9tZUN0cmwnXG4gICAgfSk7XG5cbiAgfSk7XG5cbn0pKHdpbmRvdy5hbmd1bGFyKTtcbiJdLCJmaWxlIjoiYXNzZXRzL2pzL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
