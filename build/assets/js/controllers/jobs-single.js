(function(angular) {

 var app = angular.module('t2w');

 app.controller('JobsSingleCtrl', ['$scope', '$http', 'baseUrl', '$routeParams', function($scope, $http, baseUrl, $routeParams) {
  //  console.log('SINGLE', $routeParams.id)
   $http.get(baseUrl + '/jobs/' + $routeParams.id).
     success(function(data, status, headers, config) {
      //  console.log('JOB',data)
       $scope.job = data;
       $scope.responsibility = data.responsibility;
       $scope.qualifications = data.qualifications;
     }).
     error(function(data, status, headers, config) {
     }
   );
 }]);

})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvY29udHJvbGxlcnMvam9icy1zaW5nbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKGFuZ3VsYXIpIHtcblxuIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndDJ3Jyk7XG5cbiBhcHAuY29udHJvbGxlcignSm9ic1NpbmdsZUN0cmwnLCBbJyRzY29wZScsICckaHR0cCcsICdiYXNlVXJsJywgJyRyb3V0ZVBhcmFtcycsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsIGJhc2VVcmwsICRyb3V0ZVBhcmFtcykge1xuICAvLyAgY29uc29sZS5sb2coJ1NJTkdMRScsICRyb3V0ZVBhcmFtcy5pZClcbiAgICRodHRwLmdldChiYXNlVXJsICsgJy9qb2JzLycgKyAkcm91dGVQYXJhbXMuaWQpLlxuICAgICBzdWNjZXNzKGZ1bmN0aW9uKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAvLyAgY29uc29sZS5sb2coJ0pPQicsZGF0YSlcbiAgICAgICAkc2NvcGUuam9iID0gZGF0YTtcbiAgICAgICAkc2NvcGUucmVzcG9uc2liaWxpdHkgPSBkYXRhLnJlc3BvbnNpYmlsaXR5O1xuICAgICAgICRzY29wZS5xdWFsaWZpY2F0aW9ucyA9IGRhdGEucXVhbGlmaWNhdGlvbnM7XG4gICAgIH0pLlxuICAgICBlcnJvcihmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICB9XG4gICApO1xuIH1dKTtcblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvY29udHJvbGxlcnMvam9icy1zaW5nbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
