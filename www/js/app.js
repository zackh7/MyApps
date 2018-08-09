// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('timerApp', ['ionic','angular-svg-round-progressbar'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});

app.controller('timeCtrl',function($scope,$timeout){
  $scope.myTimer={};
  $scope.myTimer.time = 1000;
  $scope.myTimerfixed=10;
  var mytimeVariable;

  $scope.mycustomeTimer = function(){
    $scope.myTimer.time--;

    if($scope.myTimer.time == 0){
      $timeout.cancel(mytimeVariable);
      complete(false);
      return false;
    }
    if($scope.myTimer.time<=10){
      $('#numstyle').css('color','red');
    }

    mytimeVariable = $timeout($scope.mycustomeTimer,1000);

  };

  $scope.start=function(){
    mytimeVariable = $timeout($scope.mycustomeTimer,1000);
    $('.button-positive').attr('disabled','true');
  };

  $scope.stop=function(){
    $timeout.cancel(mytimeVariable);
    complete(true);

    $('.button-positive').removeAttr('disabled');
  };

   var complete = function(forceAbort){
      if(forceAbort)
      {
        alert('You killed the timer');
      }
      else
      {
        alert('Timer Completed');
      }
   };
});
