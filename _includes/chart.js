var chartTestApp = angular.module('ChartTestApp', ['chart.js']);

chartTestApp.controller('ChartTestController',  function() {

  var percentileOptions = {
    pointRadius: 0,
    pointHitRadius: 0,
    borderWidth: 1,
    fill: false,
    borderColor: '#999',
  };

  var percentileOptions2 = {
    pointRadius: 0,
    pointHitRadius: 0,
    borderWidth: 1,
    fill: false,
    borderColor: '#f00',
  };

  this.datasetOptions = [
    percentileOptions,
    percentileOptions2,
    percentileOptions
  ];

  this.data = [
    [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 5 },
    ],
    [
      { x: 0, y: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 4 },
      { x: 3, y: 5 },
      { x: 4, y: 6 },
    ]
  ];

  this.options =  {
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fixedStepSize: 1
        }
      }],
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        gridLines: {
          display: false
        },
        ticks: {
          fixedStepSize: 1
        }
      }]
      }
    }
});
