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

  	$scope.$on("time", function(event, data) {
  		console.log(data);
  	});
  });
