$(window).on('shown.bs.offcanvas', function (e) {
  $('.home-layers').css('top', '100px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.home-layers').css('top', '485px');
});
