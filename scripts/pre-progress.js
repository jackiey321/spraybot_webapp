$(window).load(function() {
  const myTimeout = setTimeout(switchMap, 10000);
  function switchMap() {
    $('.pre-map').css('background-image', 'url(images/pre-progress/pre-map2.png)');
    $('.disabled').removeClass('disabled');
    $('#alert-message').text('Ready to start mission');
  }
})

$(window).on('shown.bs.offcanvas', function (e) {
  $('.pre-layers').css('top', '70px');
  $('.alert').css('height', '755px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.pre-layers').css('top', '600px');
  $('.alert').css('height', '220px');
});