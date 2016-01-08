'use strict';

var app = angular.module('angularTest', []);

app.controller('parentCtrl', function($scope){
  $scope.message = '____';
  $scope.$on('newMessage', function(event, args){
    $scope.message = args.message;
    console.log('parent event listener');
    console.log('event:', event);
    console.log('args:', args);
  });

  $scope.click = function(){
    $scope.$broadcast('broadcastMessage', {data: $scope.parentText});
    console.log('parent broadcast!');
  }
});

app.controller('childCtrl', function($scope){
  $scope.click = function() {
    $scope.$emit('newMessage', {message: $scope.childText});
    console.log('child emit!');
  };

  $scope.$on('broadcastMessage', function(event, args){

    $scope.message = args.message;
    console.log('child event listener');
    console.log('event:', event);
    console.log('args:', args);
  });
});
