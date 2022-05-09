function startProgress() {
  let times = 100;

  let x = setInterval(function() {
    times--;

    let curr_progress = parseInt($('.progress-bar').attr("style").replace(/[^0-9]/g, ''));
    let newTime = (curr_progress + 1).toString();
    $('.progress-bar').attr("style", "width: " + newTime + "%");

    if (times <= 0) {
      document.location.href = 'mission-complete.html'; 
    }
  }, 250);
}

$(window).on('shown.bs.offcanvas', function (e) {
  $('.layers').css('top', '115px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.layers').css('top', '650px');
});
