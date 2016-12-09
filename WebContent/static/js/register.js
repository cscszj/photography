$(function () {
  $('.btn-rewrite').click(function () {
    $('form')[0].reset();
  });
  $('#nationality').change(function () {
    if($('#nationality').val() === '海外请填写') {
      $('#abroad')[0].focus();
    }
  });
});
