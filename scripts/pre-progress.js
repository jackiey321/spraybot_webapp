$(window).load(function() {
  const myTimeout = setTimeout(switchMap, 5000);
  function switchMap() {
    $('.pre-map').css('background-image', 'url(images/pre-progress/pre-map2.png)');
    $('.disabled').removeClass('disabled');
    $('#alert-message').text('Ready to start mission');
  }
})

$(window).on('shown.bs.offcanvas', function (e) {
  $('.pre-layers').css('top', '45px');
  $('.alert').css('height', '665px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.pre-layers').css('top', '485px');
  $('.alert').css('height', '220px');
});