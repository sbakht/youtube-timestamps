'use strict';

/**
 * @ngdoc function
 * @name youStampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the youStampApp
 */
angular.module('youStampApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.theBestVideo = 'sMKoNBRZM1M';
  	$scope.currentVideoTime = 0;
  	
  	$scope.$on('youtube.player.playing', function ($event, player) {
  		setInterval(function() { updateTimer(player) }, 500);
  	});

  	function updateTimer(player) {
  		$scope.currentVideoTime = player.getCurrentTime();
  		console.log($scope.currentVideoTime);
  	}

  });
