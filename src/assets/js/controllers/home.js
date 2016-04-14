(function(angular) {

  var app = angular.module('smartassistant');

  app.controller('HomeCtrl', ['$scope', function($scope) {
    // TODO: use vanilla js instead of jquery; needs refactoring
    $('button#next').click(function(){
      if($('.facial-structure').is(':visible')) {
        $('.facial-structure').hide();
        $('.facial-dependency').show();
        $('.navigation .next').hide();
        $('.navigation .previous').show();
        $('li.arrow:eq(0)').removeClass('active');
        $('li.arrow:eq(1)').addClass('active');
      }
    });
    $('button#previous').click(function(){
      if($('.facial-dependency').is(':visible')) {
        $('.facial-structure').show();
        $('.facial-dependency').hide();
        $('.navigation .next').show();
        $('.navigation .previous').hide();
        $('li.arrow:eq(0)').addClass('active');
        $('li.arrow:eq(1)').removeClass('active');
      }
    });
  }]);

})(window.angular);
