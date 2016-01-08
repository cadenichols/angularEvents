'use strict';

var app = angular.module('angularTest', []);

app.controller('parentCtrl', function($scope){
  $scope.message = '____';
  $scope.$on('newMessage', function(event, args){
    console.log('event:', event);
    console.log('args:', args);

  });
});

app.controller('childCtrl', function($scope){
  $scope.click = function() {
    $scope.$emit('newMessage', 'whatever...');
    console.log('emit!');
  };
});
