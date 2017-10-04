angular.module('blocChat', ['ui.router']);

(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
         .state('home', {
             url: '/',
             controller: 'HomeCtrl as home',
             templateUrl: '/templates/home.html'
         })
         .state('about', {
             url: '/about',
             controller: 'AboutCtrl as about',
             templateUrl: '/templates/about.html'
         });
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ngCookies'])
    .config(config);
})();
