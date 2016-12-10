'use strict';

(function(global){
  
  global.MakeCSCSZJ = function(){

    /** @namespace
     */
    let CSCSZJ = function(){
      return CSCSZJ.get.apply(global, arguments);
    };

    CSCSZJ.config = {
      server: location.protocol + '//' + location.host + '/contest',
      timeout: 10000,
    };

    CSCSZJ.api = {
      auth: {
        login: CSCSZJ.config.server + '/auth/logon'
      }
    };

    return CSCSZJ;

  };

  global.CSCSZJ = MakeCSCSZJ();

})(window);



