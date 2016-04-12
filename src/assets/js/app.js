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
