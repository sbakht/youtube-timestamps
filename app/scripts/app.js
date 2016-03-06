'use strict';

/**
 * @ngdoc overview
 * @name youStampApp
 * @description
 * # youStampApp
 *
 * Main module of the application.
 */
angular
  .module('youStampApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'youtube-embed',
    'cfp.hotkeys'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
