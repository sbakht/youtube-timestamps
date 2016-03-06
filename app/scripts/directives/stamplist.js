'use strict';

/**
 * @ngdoc directive
 * @name youStampApp.directive:stampList
 * @description
 * # stampList
 */
angular.module('youStampApp')
  .directive('stampList', function () {
    return {
      templateUrl: 'views/templates/stamplist.html',
      restrict: 'E',
      scope: {
      	stamps: "=",
      	player: "="
      },
      link: function postLink(scope, element, attrs) {

      	scope.remove = function(stamp) {
      		var index = scope.stamps.indexOf(stamp);
      		if(index !== -1) {
      			scope.stamps.splice(index, 1);
      		}
      	}

      	scope.seek = function(stamp) {
      		scope.player.seekTo(timeStrToSeconds(stamp.time));
      	}

	  	function timeStrToSeconds(time) {
	  		var minutes = time.match(/\d+/)[0];
	  		var seconds = time.match(/\:(\d+)/)[1];
	  		return parseInt(minutes) * 60 + parseInt(seconds);
	  	}
      }
    };
  });
