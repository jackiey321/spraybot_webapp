$(window).on('shown.bs.offcanvas', function (e) {
  $('.home-layers').css('top', '105px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.home-layers').css('top', '490px');
});
