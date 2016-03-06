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
  	$scope.theBestVideo = 'm-CKVr6Z1Tw';
  	$scope.currentVideoTime = 0;
  	$scope.newStampTime = 0;
  	$scope.newStampInput = "";

  	$scope.$on('youtube.player.playing', function ($event, player) {
  		setInterval(function() { updateTimer(player) }, 500);
  	});

  	function updateTimer(player) {
  		$scope.currentVideoTime = secondsToTimeStr(player.getCurrentTime());
  		console.log($scope.currentVideoTime);
  	}

  	$scope.keypress = function() {
  		if($scope.newStampInput.length === 0) {
  			$scope.newStampTime = $scope.currentVideoTime;
  		}
  	}

  	function secondsToTimeStr(time) {
  		var seconds = Math.floor(time % 60);
  		var minutes = Math.floor(time / 60);
  		if(seconds < 10) {
  			seconds = "0" + seconds;
  		}
  		if(minutes < 10) {
  			minutes = "0" + minutes;
  		}
  		return minutes + ":" + seconds; 
  	}

  });
