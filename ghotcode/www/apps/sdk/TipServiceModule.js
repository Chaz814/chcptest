angular.module('TipServiceModule',[])
.factory('TipService',['$timeout',function($timeout){
  return{
    show : function(opt){
      opt = opt || {};
      opt = angular.extend({
        msg : '操作成功',
        type : 'info',
        interval : 3000
      },opt);
      var tip = document.createElement('div');
      tip.classList.add('pop-tips');
      tip.setAttribute('id', 'pop-tips');
      var bg = document.createElement('div');
      bg.classList.add('op-bg')
      if(angular.equals(opt.type,'error')){
        bg.classList.add('bg-red');
      }else{
        bg.classList.add('bg-blue');
      }
      tip.appendChild(bg);
      var txt = document.createElement('div');
      txt.classList.add('con-txt');
      var exp = document.createElement('span');
      exp.classList.add('icon-chat_express');
      txt.appendChild(exp);
      txt.textContent = opt.msg;
      tip.appendChild(txt);
      if(document.getElementById('pop-tips') != null){
          document.getElementById('pop-tips').remove();
      }
      document.body.appendChild(tip);
      $timeout(function(){
        if(document.getElementById('pop-tips') != null){
            document.getElementById('pop-tips').remove();
        }
      },opt.interval);
    }
  };
}]);
