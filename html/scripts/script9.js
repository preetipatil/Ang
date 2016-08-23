
var myfirstMod = angular
			.module('myFirstmodule',[])
			.controller("myFirstController",function($scope){
				var sports =[
				{name:'Cricket',likes:0,dislikes:0},
				{name:'Football',likes:0,dislikes:0},
				{name:'Tennis',likes:0,dislikes:0},
				{name:'Chess',likes:0,dislikes:0},
				];

				$scope.sports= sports;

				$scope.incrementVote= function(sport){
				    sport.likes++;
				}

				$scope.decrementVote= function(sport){
                    sport.dislikes++;
                }
			});


