(function(angular) {

  var app = angular.module('t2w');

  app.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.hello = "Hello"
  }]);

  function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }


})(window.angular);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhc3NldHMvanMvY29udHJvbGxlcnMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oYW5ndWxhcikge1xuXG4gIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgndDJ3Jyk7XG5cbiAgYXBwLmNvbnRyb2xsZXIoJ0NvbnRhY3RDdHJsJywgWyckc2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwKSB7XG4gICAgJHNjb3BlLmhlbGxvID0gXCJIZWxsb1wiXG4gIH1dKTtcblxuICBmdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIHZhciBteUxhdExuZyA9IHtsYXQ6IC0yNS4zNjMsIGxuZzogMTMxLjA0NH07XG5cbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgIHpvb206IDQsXG4gICAgICBjZW50ZXI6IG15TGF0TG5nXG4gICAgfSk7XG5cbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogbXlMYXRMbmcsXG4gICAgICBtYXA6IG1hcCxcbiAgICAgIHRpdGxlOiAnSGVsbG8gV29ybGQhJ1xuICAgIH0pO1xuICB9XG5cblxufSkod2luZG93LmFuZ3VsYXIpO1xuIl0sImZpbGUiOiJhc3NldHMvanMvY29udHJvbGxlcnMvY29udGFjdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
