var myfirstMod = angular
			.module('myFirstmodule',[])
			.controller("myFirstController",function($scope){ 
				var country ={
					name:'UK',
					city:'London',
					attraction:'images/lb.JPG'				
				};
			$scope.country = country;
			});


