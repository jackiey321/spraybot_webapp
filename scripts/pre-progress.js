$(window).load(function() {
  const myTimeout = setTimeout(switchMap, 10000);
  function switchMap() {
    $('.pre-map').css('background-image', 'url(images/pre-progress/pre-map2.png)');
    $('.disabled').removeClass('disabled');
  }
})