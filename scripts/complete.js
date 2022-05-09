$(window).on('shown.bs.offcanvas', function (e) {
  $('.layers').css('top', '115px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.layers').css('top', '650px');
});