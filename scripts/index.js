$(window).on('shown.bs.offcanvas', function (e) {
  $('.home-layers').css('top', '115px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.home-layers').css('top', '550px');
});
