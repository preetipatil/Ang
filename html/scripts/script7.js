var myfirstMod = angular
			.module('myFirstmodule',[])
			.controller("myFirstController",function($scope){ 
				var student =[
						{ name:'Maria', age:'7',activity:'Music'},
						{ name:'Lisa', age:'10',activity:'Dance'},
						{ name:'Serena', age:'8',activity:'Drama'},
						{ name:'Sam', age:'9',activity:'Sport'},
						{ name:'Rachel', age:'10',activity:'Piano'},
						{ name:'Sarah', age:'7',activity:'dance'},

					     ];
			$scope.children = student;
			});


