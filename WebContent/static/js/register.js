$(function () {
  $('.btn-rewrite').click(function () {
    $('form')[0].reset();
  });
  $('#nationality').change(function () {
    let $prov = $('#prov');
    let $city = $('#city');
    if($('#nationality').val() === '海外请填写') {
      $('#abroad')[0].focus();
      $prov.val('');
      $prov.attr('disabled', 'disabled');
      $city.val('');
      $city.attr('disabled', 'disabled');
    } else {
      $prov[0].focus();
      $prov.val('');
      $prov.removeAttr('disabled');
      $city.val('');
      $city.removeAttr('disabled');
    }
  });
  function checkInput() {
    
  }
});
