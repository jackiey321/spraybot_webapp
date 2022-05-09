$(window).on('shown.bs.offcanvas', function (e) {
  $('.layers').css('top', '105px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.layers').css('top', '545px');
});