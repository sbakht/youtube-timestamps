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
      	stamps: "="
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
