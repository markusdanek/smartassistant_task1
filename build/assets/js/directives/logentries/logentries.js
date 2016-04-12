(function(angular) {

  var app = angular.module('tim');

  app.controller('LogentriesCtrl', ['$scope', '$http', 'UserService', 'baseUrl', function($scope, $http, UserService, baseUrl) {
    $http({
      method: 'GET',
      url: baseUrl + '/logentries?week=2016-W11'
    }).then(function(response) {
      $scope.items = response.data.items;
      $scope.totalTime = response.data.totalTime;
      $scope.balanceTime = response.data.balanceTime;
      $scope.hoursToWork = response.data.hoursToWork;
    }, function(err) {
      console.error(err);
    });
  }]);

  app.directive('logentries', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/js/directives/logentries/logentries.html',
      controller: 'LogentriesCtrl'
    };
  });

  app.filter('formatTime', function() {
    return function(input) {
      return moment.utc(input).format('HH:mm');
    };
  })

  app.filter('formatDay', function() {
    return function(input) {
      return moment.utc(input).format('ddd, D. MMMM');
    };
  });;


})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvZGlyZWN0aXZlcy9sb2dlbnRyaWVzL2xvZ2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3RpbScpO1xuXG4gIGFwcC5jb250cm9sbGVyKCdMb2dlbnRyaWVzQ3RybCcsIFsnJHNjb3BlJywgJyRodHRwJywgJ1VzZXJTZXJ2aWNlJywgJ2Jhc2VVcmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCBVc2VyU2VydmljZSwgYmFzZVVybCkge1xuICAgICRodHRwKHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IGJhc2VVcmwgKyAnL2xvZ2VudHJpZXM/d2Vlaz0yMDE2LVcxMSdcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAkc2NvcGUuaXRlbXMgPSByZXNwb25zZS5kYXRhLml0ZW1zO1xuICAgICAgJHNjb3BlLnRvdGFsVGltZSA9IHJlc3BvbnNlLmRhdGEudG90YWxUaW1lO1xuICAgICAgJHNjb3BlLmJhbGFuY2VUaW1lID0gcmVzcG9uc2UuZGF0YS5iYWxhbmNlVGltZTtcbiAgICAgICRzY29wZS5ob3Vyc1RvV29yayA9IHJlc3BvbnNlLmRhdGEuaG91cnNUb1dvcms7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG4gIH1dKTtcblxuICBhcHAuZGlyZWN0aXZlKCdsb2dlbnRyaWVzJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICB0ZW1wbGF0ZVVybDogJy9hc3NldHMvanMvZGlyZWN0aXZlcy9sb2dlbnRyaWVzL2xvZ2VudHJpZXMuaHRtbCcsXG4gICAgICBjb250cm9sbGVyOiAnTG9nZW50cmllc0N0cmwnXG4gICAgfTtcbiAgfSk7XG5cbiAgYXBwLmZpbHRlcignZm9ybWF0VGltZScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuIG1vbWVudC51dGMoaW5wdXQpLmZvcm1hdCgnSEg6bW0nKTtcbiAgICB9O1xuICB9KVxuXG4gIGFwcC5maWx0ZXIoJ2Zvcm1hdERheScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgcmV0dXJuIG1vbWVudC51dGMoaW5wdXQpLmZvcm1hdCgnZGRkLCBELiBNTU1NJyk7XG4gICAgfTtcbiAgfSk7O1xuXG5cbn0pKHdpbmRvdy5hbmd1bGFyKTtcbiJdLCJmaWxlIjoiYXNzZXRzL2pzL2RpcmVjdGl2ZXMvbG9nZW50cmllcy9sb2dlbnRyaWVzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
