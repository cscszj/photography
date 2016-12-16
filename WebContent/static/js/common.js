'use strict';

(function (global) {

  global.MakeCSCSZJ = function () {

    var CSCSZJ = function () {
      return CSCSZJ.get.apply(global, arguments);
    };

    CSCSZJ.config = {
      server: location.protocol + '//' + location.host + '/contest',
      timeout: 10000,
      cellphone: {
        regExp: /^[0-9]{11}$/
      },
      email: {
        regExp: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      }
    };

    CSCSZJ.api = {
      auth: {
        login: CSCSZJ.config.server + '/auth/logon',
        register: CSCSZJ.config.server + '/auth/register'
      },
      user: {
        piclist: CSCSZJ.config.server + '/user/piclist/query',
        contest: CSCSZJ.config.server + '/user/contest/query'
      }
    };

    return CSCSZJ;

  };

  global.CSCSZJ = MakeCSCSZJ();

})(window);



