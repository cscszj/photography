$(function () {
  var tpl_list = $('#tpl-list').html();
  var $lists = $('#lists');

  function initItem(list) {
    var html_list = template(tpl_list, {list: list});
    $lists.html(html_list);
  }

  function loadData() {
    var params = {
      id: 1
    };
    $.ajax({
      url: CSCSZJ.api.user.contest,
      data: JSON.stringify(params),
      type: 'POST',
      timeout: CSCSZJ.config.timeout,
      success: function (respData, status, jqXhr) {
        if (respData && respData.rc === 0) {
          var list = respData.list;
          initItem(list);
        }
      },
      error: function (respData, statusCities, jqXhrCities) {

        alert('网络异常');


        var list = [{
          name: '全球摄影网首届“中国夜市”主题摄影大赛征稿启事',
          pic: 'https://img.alicdn.com/bao/uploaded/i2/925611061/TB2KkqQXUhnpuFjSZFpXXcpuXXa_!!925611061.jpg_430x430q90.jpg',
          enrollstarttime: '2016-12-12',
          enrollendtime: '2016-12-31',
          organizers: '全球摄影网',
          awarddesc: '最高奖励20000元人民币',
          status: '比赛中',
          surplusdays: '20',
          originwebsite: '全球摄影网（http://www.baidu.com）'
        },
          {
            name: '全球摄影网首届“中国夜市”主题摄影大赛征稿启事',
            pic: 'https://img.alicdn.com/bao/uploaded/i2/925611061/TB2KkqQXUhnpuFjSZFpXXcpuXXa_!!925611061.jpg_430x430q90.jpg',
            enrollstarttime: '2016-12-12',
            enrollendtime: '2016-12-31',
            organizers: '全球摄影网',
            awarddesc: '最高奖励20000元人民币',
            status: '比赛中',
            surplusdays: '20',
            originwebsite: '全球摄影网（http://www.baidu.com）'
          },
          {
            name: '全球摄影网首届“中国夜市”主题摄影大赛征稿启事',
            pic: 'https://img.alicdn.com/bao/uploaded/i2/925611061/TB2KkqQXUhnpuFjSZFpXXcpuXXa_!!925611061.jpg_430x430q90.jpg',
            enrollstarttime: '2016-12-12',
            enrollendtime: '2016-12-31',
            organizers: '全球摄影网',
            awarddesc: '最高奖励20000元人民币',
            status: '比赛中',
            surplusdays: '20',
            originwebsite: '全球摄影网（http://www.baidu.com）'
          }];
        initItem(list);

      }
    });
  }

  loadData();
});
