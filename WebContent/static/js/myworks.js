$(function() {
  var sort = 1, pagesize = 1;
  var tpl_list = $('#tpl-list').html();
  var $lists = $('#lists');
  function initItem(list) {
    var html_list = template(tpl_list, {list: list});
    $lists.html(html_list);
  }
  function loadDate(title, sort, pagesize) {
    console.log(pagesize);
    var params = {
      params: {
        title: title,
        sort: sort,
        pwd: pagesize
      },
      id: 1
    };
    $.ajax({
      url: CSCSZJ.api.user.piclist,
      data: JSON.stringify(params),
      type: 'POST',
      timeout: CSCSZJ.config.timeout,
      success: function (respData, status, jqXhr) {
        if (respData && respData.rc === 0) {
          $('.tcdPageCode').createPage({
            pageCount: respData.page.total,
            current: respData.page.currpageno,
          });
          var list = respData.list;
          initItem(list);
        }
      },
      error: function (respData, statusCities, jqXhrCities) {

        // alert('网络异常');

        var respData = {"rc":0,"list":[{"bigpic":"","pic":"http://sad/root-context.xml","picid":"445555","reserveflag":1,"title":"asdaddddd","uploadtime":"2016-11-26"},{"bigpic":"","pic":"http://sad/root-context.xml","picid":"34ffff","reserveflag":1,"title":"asdaddddd","uploadtime":"2016-11-26"},{"bigpic":"","pic":"http://sad/root-context.xml","picid":"222224","reserveflag":1,"title":"asdaddddd","uploadtime":"2016-11-10"},{"bigpic":"","pic":"http://sad/root-context.xml","picid":"22222","reserveflag":0,"title":"asdaddddd","uploadtime":"2016-11-10"},{"bigpic":"","pic":"http://sad/root-context.xml","picid":"1212","reserveflag":0,"title":"asdaddddd","uploadtime":"2016-11-10"}],"page":{"total":5,"currpageno":1,"perpage":15},"uploadedcnt":5,"leftuploadcnt":95,"usedspace":6}
        $('.tcdPageCode').createPage({
          pageCount: respData.page.total,
          current: respData.page.currpageno,
        });
        var list = respData.list;
        initItem(list);
      }
    });
  }
  $('.tcdPageCode').createPage({
    backFn: function (p) {
      loadDate('', sort, p);
    }
  });
  loadDate('', 1, 1);
});
