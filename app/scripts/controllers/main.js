'use strict';

/**
 * @ngdoc function
 * @name youStampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the youStampApp
 */
angular.module('youStampApp')
  .controller('MainCtrl', function ($scope, hotkeys) {
  	$scope.theBestVideo = 'v59ZdF04w3c';
  	$scope.currentVideoTime = "00:00";
  	$scope.newStamp = { time: "00:00", input: ""};
  	$scope.stamps = [];
  	$scope.player = null;

  	$scope.changeVid = function() {
	  	$scope.stamps = [];
  	}

	$scope.$on('youtube.player.ready', function ($event, player) {
  		$scope.player = player;
  	});

  	$scope.$on('youtube.player.playing', function ($event, player) {
  		setInterval(function() { updateTimer(player) }, 500);
  	});

  	function updateTimer(player) {
  		$scope.currentVideoTime = secondsToTimeStr(player.getCurrentTime());
  		if($scope.newStamp.input.length === 0) {
  			$scope.newStamp.time = $scope.currentVideoTime;
  			$scope.$apply();
  		}
  	}

  	$scope.createStamp = function() {
  		if($scope.newStamp.input.length) {
			$scope.stamps.push($scope.newStamp);
			resetInputs();
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

  	function resetInputs() {
  		$scope.newStamp = {};
  		$scope.newStamp.input = "";
		$scope.newStamp.time = $scope.currentVideoTime;
  	}

  	hotkeys.add({
	    combo: 'alt+up',
	    description: '+1 to creating stamp time',
	    allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
	    callback: function() {
	      var videoLength = $scope.player.getDuration();
	      var seconds = timeStrToSeconds($scope.newStamp.time) + 1;
	      if(seconds <= videoLength) {
	      	$scope.newStamp.time = secondsToTimeStr(seconds);
	      }
	    }
	});

  	hotkeys.add({
	    combo: 'alt+down',
	    description: '-1 to creating stamp time',
	    allowIn: ['INPUT', 'SELECT', 'TEXTAREA'],
	    callback: function() {
	      var seconds = timeStrToSeconds($scope.newStamp.time) - 1;
	      if(seconds >= 0) {
	      	$scope.newStamp.time = secondsToTimeStr(seconds);
	  	  }
	    }
	});

  	function timeStrToSeconds(time) {
  		var minutes = time.match(/\d+/)[0];
  		var seconds = time.match(/\:(\d+)/)[1];
  		return parseInt(minutes) * 60 + parseInt(seconds);
  	}

  });
