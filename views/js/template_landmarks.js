// Code goes here
var app = angular.module('myApp');

//Todo Test
app.directive('templateLandmarks', function(){
    return {
      restrict: 'EA',
      templateUrl: './partials/template_landmarks.html',
      scope: {
        title: '@'
      }
    };
  });
