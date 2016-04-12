(function(angular) {


  var app = angular.module('tim');

  app.controller('LogentriesCtrl', ['$scope', '$http', 'UserService', function($scope, $http, UserService) {
    $http({
      method: 'GET',
      url: 'https://tim.creativebrains.net/logentries?week=2016-W10'
    }).then(function(response) {
      console.log(response.data)
      $scope.items = response.data.items;
      $scope.totalTime = response.data.totalTime;
    }, function(err) {
      console.error(err);
    });
  }]);

  app.directive('logentries', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/logentries.html',
      controller: 'LogentriesCtrl'
    };
  });

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvbG9nZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oYW5ndWxhcikge1xuXG5cbiAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0aW0nKTtcblxuICBhcHAuY29udHJvbGxlcignTG9nZW50cmllc0N0cmwnLCBbJyRzY29wZScsICckaHR0cCcsICdVc2VyU2VydmljZScsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsIFVzZXJTZXJ2aWNlKSB7XG4gICAgJGh0dHAoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vdGltLmNyZWF0aXZlYnJhaW5zLm5ldC9sb2dlbnRyaWVzP3dlZWs9MjAxNi1XMTAnXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICRzY29wZS5pdGVtcyA9IHJlc3BvbnNlLmRhdGEuaXRlbXM7XG4gICAgICAkc2NvcGUudG90YWxUaW1lID0gcmVzcG9uc2UuZGF0YS50b3RhbFRpbWU7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG4gIH1dKTtcblxuICBhcHAuZGlyZWN0aXZlKCdsb2dlbnRyaWVzJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJy9hc3NldHMvanMvbG9nZW50cmllcy5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdMb2dlbnRyaWVzQ3RybCdcbiAgICB9O1xuICB9KTtcblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvbG9nZW50cmllcy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
