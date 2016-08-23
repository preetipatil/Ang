var myfirstMod = angular.module('myFirstmodule',[]);

var myFirstController = function($scope){ $scope.message ="My First Module and Controller."; }; 

myfirstMod.controller("myFirstController",myFirstController);
