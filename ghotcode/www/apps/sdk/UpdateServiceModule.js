angular.module('UpdateServiceModule',['TipServiceModule'])
.factory('UpdateService',['$window','TipService',function($window,tip){
  return{
    updateSlient : function() {
      var userToken='';

      var options = {

        }
  
      this.checkForUpdate(options);
    },
    checkForUpdate: function(options) {
        if(!angular.isDefined(chcp)) {
          console.log("chcp no define");
          errorInfo = "chcp no define";
          tip.show({
            msg : errorInfo,
            type : 'error'
          });
          return;
        }
        if(!angular.isDefined(chcp.fetchUpdate)) {
          console.log("chcp.fetchUpdate no define");
          errorInfo = "chcp.fetchUpdate no define";
          tip.show({
            msg : errorInfo,
            type : 'error'
          });
          return;
        }
        console.log("开始检查更新");
        tip.show({
          msg : "开始检查更新",
          type : 'info'
        });

        chcp.fetchUpdate(this.fetchUpdateCallback,options);
    },
    fetchUpdateCallback: function(error, data) {
        if (error) {
          console.log('Failed to load the update with error code: ' + error.code);
          console.log(error.description);
          errorInfo = 'Failed to load the update with error code: ' + error.code+error.description;
          tip.show({
            msg : errorInfo,
            type : 'error'
          });
          return;
        }
        console.log('Update is loaded, running the installation');
        tip.show({
          msg : 'Update is loaded, running the installation',
          type : 'info'
        });
        if(!angular.isDefined(chcp.installUpdate)) {
          console.log("chcp.installUpdate no define");
          errorInfo = "chcp.installUpdate no define";
          tip.show({
            msg : errorInfo,
            type : 'error'
          });
          return;
        }
        tip.show({
          msg : "开始安装更新",
          type : 'info'
        });
        chcp.installUpdate(this.installationCallback);
    },
    installationCallback: function(error) {
        if (error) {
          console.log('Failed to install the update with error code: ' + error.code);
          console.log(error.description);
          errorInfo = 'Failed to install the update with error code: ' + error.code + error.description;
          tip.show({
            msg : errorInfo,
            type : 'error'
          });
        } else {
          console.log('Update installed!');
          errorInfo = 'Update installed!';
          tip.show({
            msg : errorInfo,
            type : 'error'
          });
        }
    }
  };
}]);
