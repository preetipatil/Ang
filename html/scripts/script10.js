
var myfirstMod = angular
			.module('myFirstmodule',[])
			.controller("myFirstController",function($scope){
				var employees =[
                    {name:'Jack',age:30,dob:new Date("November 23,1990" ), salary:30000.50, occupation:"manager"},
                    {name:'Ben',age:23,dob:new Date("March 20,1980" ), salary:40000.70, occupation:"Devloper"},
                    {name:'Mike',age:55,dob:new Date("May 12,1978" ), salary:30000.88 , occupation:"clark"},
                    {name:'Rob',age:40,dob:new Date("June 3,1970" ), salary:10000.97, occupation:"Bushiness analyst"},
                    {name:'Robert',age:48,dob:new Date("july 31,1975" ), salary:50000, occupation:"CEO"},
				];

				$scope.employees= employees;
				$scope.rowlimit= 3;
                $scope.sortColumn="name";
			});


