function showRouteTab() {
  $('#route-tab').tab('show')
}

function showVehicleTab() {
  $('#vehicle-tab').tab('show')
}

function showDetailsTab() {
  $('#details-tab').tab('show')
}

let prev = null;

function selectVehicle(selection) {
  let img = $(selection).find("img.select")[0];

  if($(img).attr("src").includes("unselected")) {
    // deselect previous selection if it exists
    if(prev != null) {
      $(prev).removeClass('selected');
      let prev_img = $(prev).find("img.select")[0];
      $(prev_img).attr("src", "images/mission-start/unselected.png");
    }
    // select new vehicle
    prev = selection;
    $(selection).addClass("selected");
    $(img).attr("src", "images/mission-start/selected.png");
    // enable next button
    $('#next').removeClass('disabled');
  }
  else {
    // deselect vehicle
    $(img).attr("src", "images/mission-start/unselected.png");
    $(selection).removeClass('selected');
    // disable next button
    $('#next').addClass('disabled');
  }
}

$(window).on('shown.bs.modal', function (e) {
  const myTimeout = setTimeout(switchModal, 3000);
  function switchModal() {
    $('#robot-located').modal('show');
    $('#locating-robot').modal('hide');
  }
});