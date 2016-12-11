$(function () {
  let email, phone, pwd, pwdAgain, middlename, firstname, firstnameen, lstname, lstnameen, language, province, city, address, zipcode, isjoinedgroup, groupname, tType;
  isjoinedgroup = 1;
  // 初始化省市
  $('.provinces').citySelect({
    prov: '北京',
    city: '东城区'
  });

  // 省市与国家联动
  $('#nationality').change(function () {
    let $prov = $('#prov');
    let $city = $('#city');
    if ($('#nationality').val() === '海外请填写') {
      $('#abroad').removeAttr('disabled');
      $('#abroad')[0].focus();
      $prov.val('');
      $prov.attr('disabled', 'disabled');
      $city.val('');
      $city.attr('disabled', 'disabled');
    } else {
      $('#abroad').attr('disabled', 'disabled');
      $prov.removeAttr('disabled');
      $city.removeAttr('disabled');
      if ($('#nationality').val() === '中国大陆') {
        $('.provinces').citySelect({
          prov: '北京',
          city: '东城区'
        });
      } else if ($('#nationality').val() === '中国台湾') {
        $('.provinces').citySelect({
          prov: '台湾',
          city: '台北市'
        });
      } else if ($('#nationality').val() === '中国香港') {
        $('.provinces').citySelect({
          prov: '香港',
          city: '中西区'
        });
      } else if ($('#nationality').val() === '中国澳门') {
        $('.provinces').citySelect({
          prov: '澳门',
          city: '花地玛堂区'
        });
      }
    }
  });

  // 重填
  $('.btn-rewrite').click(function () {
    $('form')[0].reset();
  });

  // 团体与输入团体名称联动
  $('.type').change(function () {
    if ($('#individual').prop('checked')) {
      isjoinedgroup = 0;
      $('#team-name').val('');
      $('#team-name').attr('disabled', 'disabled');
    } else {
      isjoinedgroup = 1;
      $('#team-name').removeAttr('disabled');
    }
  });

  // 注册
  function register() {
    if ($('#mid-name').val()) {
      middlename = $('#mid-name').val();
    } else {
      middlename = '';
    }

    let params = {
      params: {
        email: email,
        phone: phone,
        pwd: pwd,
        middlename: middlename,
        firstname: firstname,
        firstnameen: firstnameen,
        lstname: lstname,
        lstnameen: lstnameen,
        language: language,
        province: province,
        city: city,
        address: address,
        zipcode: zipcode,
        isjoinedgroup: isjoinedgroup,
        groupname: groupname
      },
      id: 1
    };
    $.ajax({
      url: CSCSZJ.api.auth.register,
      data: JSON.stringify(params),
      type: 'POST',
      timeout: CSCSZJ.config.timeout,
      success: function (respData, status, jqXhr) {
        if (respData && respData.rc === 0) {
          account = respData.account;
          alert('OK');
          let photography = {};
          photography.account = account;
          photography.remember = false;
          photography.password = null;
          Cookies.set('photography', Base64.encodeURI(JSON.stringify(photography)),
          {
            expires: 7
          }
          );
        } else if (respData.rc === 10402) {
          alert('邮箱已被注册');
        } else {
          alert('网络异常');
        }
      },
      error: function (respData, statusCities, jqXhrCities) {
        alert('注册失败');
      }
    });
  }

  // 判断必填内容是否完整
  function checkInput() {
    email = $('#input-email').val();
    phone = $('#input-phone').val();
    pwd = $('#input-password').val();
    pwdAgain = $('#input-password-again').val();
    firstname = $('#surname').val();
    firstnameen = $('#surname-en').val();
    lstname = $('#name').val();
    lstnameen = $('#name-en').val();
    address = $('#address').val();
    zipcode = $('#postcodes').val();

    if (email && phone && pwd && pwdAgain && firstname && firstnameen && lstname && lstnameen && language && address && zipcode) {
      if (pwd === pwdAgain) {
        if (CSCSZJ.config.cellphone.regExp.test(phone)) {
          if (CSCSZJ.config.email.regExp.test(email)) {
            register();
          } else {
            alert('请输入正确的邮箱地址');
          }
        } else {
          alert('请输入正确的手机号码');
        }
      } else {
        alert('两次密码输入不一致');
      }
    } else {
      alert('请输入完整的注册信息');
    }
  }

  // 判断是否是团体
  function checkType() {
    if ($('#team').prop('checked')) {
      groupname = $('#team-name').val();
      if (groupname) {
        checkInput();
      } else {
        alert('请输入团体名称');
        $('#team-name')[0].focus();
      }
    } else {
      groupname = '';
      checkInput();
    }
  }

  // 判断国籍
  function checkAbroad() {
    language = $('#nationality').val();
    if (language === '海外请填写') {
      province = '';
      city = '';
      language = $('#abroad').val();
      checkType();
    } else {
      province = $('#prov').val();
      city = $('#city').val();
      if (province && city) {
        checkType();
      } else {
        alert('请输入完整的注册信息');
      }
    }
  }


  $('.btn-submit').click(function () {
    checkAbroad();
  })
}
);
