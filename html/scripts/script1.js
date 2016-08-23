var myfirstMod = angular.module('myFirstmodule',[]);

var myFirstController = function($scope){ 
				var student ={
					name:'Maria',
					age:'7',
					activity:'Music'				
				};
			$scope.child = student;
			}; 

myfirstMod.controller("myFirstController",myFirstController);
