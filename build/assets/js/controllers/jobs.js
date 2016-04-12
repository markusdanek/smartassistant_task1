(function(angular) {

  var app = angular.module('t2w');

  app.controller('JobsCtrl', ['$scope', '$http', 'baseUrl', function($scope, $http, baseUrl) {
    $http.get(baseUrl + '/jobs').
      success(function(data, status, headers, config) {
        $scope.jobs = data;
      }).
      error(function(data, status, headers, config) {
    });
  }]);

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvY29udHJvbGxlcnMvam9icy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndDJ3Jyk7XG5cbiAgYXBwLmNvbnRyb2xsZXIoJ0pvYnNDdHJsJywgWyckc2NvcGUnLCAnJGh0dHAnLCAnYmFzZVVybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsIGJhc2VVcmwpIHtcbiAgICAkaHR0cC5nZXQoYmFzZVVybCArICcvam9icycpLlxuICAgICAgc3VjY2VzcyhmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAkc2NvcGUuam9icyA9IGRhdGE7XG4gICAgICB9KS5cbiAgICAgIGVycm9yKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgfSk7XG4gIH1dKTtcblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvY29udHJvbGxlcnMvam9icy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
