$(function () {
  function setCookies(account, remember, password) {
    var photography = {};
    photography.account = account;
    photography.remember = remember;
    photography.password = password;
    Cookies.set('photography', Base64.encodeURI(JSON.stringify(photography)),
      {
        expires: 7
      }
    );
    location.href = 'index.html';
  }

  function Login(account, password) {
    var params = {
      params: {
        account: account,
        pwd: password
      },
      id: 1
    };
    $.ajax({
      url: CSCSZJ.api.auth.login,
      data: JSON.stringify(params),
      type: 'POST',
      timeout: CSCSZJ.config.timeout,
      success: function(respData, status, jqXhr) {
        if(respData && respData.rc === 0) {
          var account, password;
          account = $('#account').val();
          password = $('#password').val();
          if($('#remember-password').prop('checked')) {
            setCookies(account, true, password);
          } else {
            setCookies(account, false, null);
          }
        }
      },
      error: function (respData, statusCities, jqXhrCities) {
        alert('登陆失败');
      }
    });
  }

  function checkInput() {
    var account = $('#account').val();
    var password = $('#password').val();
    if(account && password) {
      Login(account, password);
    } else if(!account) {
      alert('请输入用户名');
    } else if(!password) {
      alert('请输入密码');
    }
  }

  var ckCookie = Cookies.get('photography');
  photography = (ckCookie !== undefined && ckCookie !== null) ? $.parseJSON(Base64.decode(ckCookie)) : undefined;
  if(photography) {
    var account = photography.account;
    var remember = photography.remember;
    $('#account').val(account);
    if(remember && password) {
      $('#remember-password').attr('checked', 'checked');
      $('#password').val(password);
    }
  }
  $('.btn-login').click(function () {
    checkInput();
  });
});
