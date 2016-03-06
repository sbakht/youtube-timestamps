'use strict';

/**
 * @ngdoc directive
 * @name youStampApp.directive:player
 * @description
 * # player
 */
angular.module('youStampApp')
  .directive('player', function ($window) {
    return {
      restrict: 'E',
      scope: {
        height: "@",
        width: "@",
        videoid: "@"
      },
      link: function postLink(scope, element, attrs) {
        var timestamps = {};

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        $window.onYouTubeIframeAPIReady = function() {
          player = new YT.Player(element.children()[0], {
            height: scope.height,
            width: scope.width,
            videoId: scope.videoid,
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
        scope.$watch('videoid', function(newValue, oldValue) {
          if (newValue == oldValue) {
            return;
          }
          player.cueVideoById(scope.videoid);
        }); 

        scope.$watch('height + width', function(newValue, oldValue) {
          if (newValue == oldValue) {
            return;
          }
          player.setSize(scope.width, scope.height);
        }); 

        function onPlayerReady(event) {
          setInterval(updateTimer, 500);
        }

        function onPlayerStateChange(event) {
          updateTimer();
        }
        function stopVideo() {
          player.stopVideo();
        }
      }
    };
  });
