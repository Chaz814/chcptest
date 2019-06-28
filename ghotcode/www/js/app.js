var serverPath = "http://127.0.0.1";
angular.module('starter', ['ionic',
  'ui.router',
  'ct.ui.router.extras',
  'oc.lazyLoad',
  'TipServiceModule',
  'UpdateServiceModule',
  'ngCordova'])
  .controller('RootCtrl', ['$scope',  'UpdateService', '$state', '$ionicLoading', '$window', '$state', '$rootScope', function ($scope,  UpdateService, $state, $ionicLoading, $window, $state, $rootScope) {


  }])
  .run(function ($ionicTabsDelegate, $ionicPlatform, $state, $rootScope,  UpdateService, $location, $window) {

  })
  .config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', '$futureStateProvider',  function ($ocLazyLoadProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider, $futureStateProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(true);
    $ionicConfigProvider.platform.android.tabs.position('standard');
    $ionicConfigProvider.views.transition('none');
  //  loadStatesProvider.addResolve();
    $futureStateProvider.stateFactory('ocLazyLoad', function ($q, $ocLazyLoad, futureState) {
      var deferred = $q.defer();
      $ocLazyLoad.load(futureState.load).then(function () {
        deferred.resolve();
      }, function () {
        deferred.reject();
      });
      return deferred.promise;
    });
    $ocLazyLoadProvider.config({
      debug: true
    });

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'apps/login/view/login.html',
        controller: 'LoginCtrl',
        resolve: {
          load: ['$ocLazyLoad',
            function ($ocLazyLoad) {
              return $ocLazyLoad.load({
                  name: 'LoginModule',
                  files: [
                    'apps/login/LoginModule.js',
                    'apps/login/controller/LoginCtrl.js'
                  ]
                }
              );
            }
          ]
        }
      });

    $urlRouterProvider.otherwise('/login');
  }])
;
