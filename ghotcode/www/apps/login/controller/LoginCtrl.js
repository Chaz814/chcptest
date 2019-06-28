
angular.module('LoginCtrlModule',[])
    .controller('LoginCtrl',['$scope',
    '$ionicPopup',
    '$state',
    '$rootScope',
    'TipService',
    'UpdateService',
    '$ionicLoading',
    function($scope,$ionicPopup,$state,$rootScope,tip,updateService,$ionicLoading){

      $scope.update = function(){
        updateService.updateSlient();
      }
    }]);
