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
      template: '<div><div ng-repeat="(time, text) in stamps">{{time}} - {{text}}</div></div>',
      restrict: 'E',
      scope: {
      	stamps: "="
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
