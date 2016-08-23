var myfirstMod = angular
			.module('myFirstmodule',[])
			.controller("myFirstController",function($scope){ 
				var student ={
					name:'Maria',
					age:'7',
					activity:'Music'				
				};
			$scope.child = student;
			});


