const mission_times = ['3 hrs 29 min left', '3 hrs 12 min left', '2 hrs 25 min left', '1 hrs 56 min left', '1 hrs 24 min left',
                       '58 min left', '32 min left', '16 min left', '5 min left', '0 min left'];

const battery = ['5 hr 50 min', '5 hr 32 min', '4 hr 52 min', '4 hr 36 min', '4 hr 02 min', '3 hr 29 min', '3 hr 03 min', 
                 '2 hr 31 min', '1 hr 55 min', '1 hr 24 min'];
                 
const herb = ['3 hr 14 min', '3 hr 02 min', '2 hr 43 min', '2 hr 33 min', '2 hr 15 min', '2 hr 01 min', '1 hr 53 min', '1 hr 32 min', 
              '1 hr 13 min', '43 min'];

function startProgress() {
  let times = 100;
  let counter = 0;

  let x = setInterval(function() {
    times--;

    let curr_progress = parseInt($('.progress-bar').attr("style").replace(/[^0-9]/g, ''));
    let newTime = (curr_progress + 1).toString();
    $('.progress-bar').attr("style", "width: " + newTime + "%");
    if (times % 10 == 0) {
      $('.time-remaining').text(mission_times[counter]);
      $('#battery').text(battery[counter]);
      $('#herbicide').text(herb[counter]);
      counter++;
    }

    if(times == 20) {
      $('#herb-icon').attr('src', 'images/status/low-herbicide.png');
    }

    if (times <= 0) {
      document.location.href = 'mission-complete.html'; 
    }
  }, 150);
}

$(window).on('shown.bs.offcanvas', function (e) {
  $('.layers').css('top', '105px');
});

$(window).on('hide.bs.offcanvas', function (e) {
  $('.layers').css('top', '545px');
});
