function showRouteTab() {
  $('#route-tab').tab('show')
}

function showVehicleTab() {
  $('#vehicle-tab').tab('show')
}

function showDetailsTab() {
  $('#details-tab').tab('show')
}

let selected = false;
function selectVehicle() {
  if (!selected){
    $('#selection').attr("src", "images/mission-start/selected.png");
    $('#next').removeClass('disabled');
    selected = true;
  }
  else {
    $('#selection').attr("src", "images/mission-start/unselected.png");
    $('#next').addClass('disabled');
    selected = false;
  }
}