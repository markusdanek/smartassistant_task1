(function(angular) {

  var app = angular.module('smartassistant');

  app.controller('HomeCtrl', ['$scope', function($scope) {
    $('button#next').click(function(){
      if( ('.facial-structure').is(':visible') ) {
        ('.facial-structure').hide();
        ('.facial-dependency').show();
      }
    });
  }]);

})(window.angular);
