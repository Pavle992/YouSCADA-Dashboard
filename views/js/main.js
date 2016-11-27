// Code goes here
var app = angular.module('myApp',[]);

//Todo Test
app.directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: './partials/event_options.html',
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

  $scope.vsb_ev = true;

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


$(document).ready(function(){

   $('head').append('<link rel="stylesheet" type="text/css" href="./css/tether.min.css">');
   $('head').append('<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">');
   $('head').append('<link rel="stylesheet" type="text/css" href="./css/main.css">');     
      
});

app.controller('myController', function ($scope) {
        Highcharts.chart('container', {

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            
            title: {
              text: 'Agregation of one type'
            },

            series: [{
                  name : "Sensor 1",
                  data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
              }, {
                name:"Sensor 2",
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
              }
            ]
      });
});

// Directive for generic chart, pass in chart options
app.directive('hcChart', function () {
    return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                    options: '='
            },
            link: function (scope, element) {
                  Highcharts.chart(element[0], scope.options);
            }
  };
});
// Directive for pie charts, pass in title and data only    
app.directive('hcPieChart', function () {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: {
              title: '@',
              data: '='
      },
      link: function (scope, element) {
          Highcharts.chart(element[0], {
              chart: {
                type: 'pie'
              },
              title: {
                text: scope.title
              },
              plotOptions: {
                pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  }
                }
              },
              series: [{
                data: scope.data
              }]
          });
      }
    };
});

app.controller('pieController', function ($scope) {
                
  // Sample options for first chart
  $scope.chartOptions = {
    title: {
      text: 'Preasure data'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },

    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  };

  // Sample data for pie chart
  $scope.pieData = [{
      name: "Sensor 1",
      y: 56.33
    }, {
      name: "Sensor 2",
      y: 24.03,
      sliced: true,
      selected: true
    }, {
      name: "Sensor 3",
      y: 10.38
    }, {
      name: "Sensor 3",
      y: 4.77
    }, {
      name: "Sensor 4",
      y: 0.91
    }, {
      name: "Sensor 5",
      y: 0.2
    }]
});