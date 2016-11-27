// Code goes here
var app = angular.module('myApp',[]);

//Todo Test
app.directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: './partials/testtest.html',
      scope: {
        list: '=',
        title: '@'
      }
    };
  });


app.controller('main', function($scope){
  $scope.todo = [
    {name: 'Exceed a threshold', completed: true},
    {name: 'Number of consecutive occurences', completed: true},
    {name: 'No data received after 20 minutes', completed: false}
  ];

});

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


app.controller('templateLandmarks', function($scope){

});

app.directive('opcija', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/opcije.html',
      scope: {
        list: '='
      }
    };
  });


app.controller('drugi', function($scope){
  $scope.todo = [
    {name: 'Filter', value: '#'},
    {name: 'Agregation', value: '#'},
    {name: 'Events', value: '#'}
  ];

});