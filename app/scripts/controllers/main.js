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
  	$scope.currentVideoTime = "00:00";
  	$scope.newStamp = { time: "00:00", input: ""};
  	$scope.stamps = {};

  	$scope.$on('youtube.player.playing', function ($event, player) {
  		setInterval(function() { updateTimer(player) }, 500);
  	});

  	function updateTimer(player) {
  		$scope.currentVideoTime = secondsToTimeStr(player.getCurrentTime());
  	}

  	$scope.keypress = function() {
  		if($scope.newStamp.input.length === 0) {
  			$scope.newStamp.time = $scope.currentVideoTime;
  		}
  	}

  	$scope.createStamp = function() {
		$scope.stamps[$scope.newStamp.time] = {input: $scope.newStamp.input};
		resetInputs();
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

  	function resetInputs() {
  		$scope.newStamp.input = "";
		$scope.newStamp.time = $scope.currentVideoTime;
  	}

  });
