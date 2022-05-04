// Establish connection with robot
var ros = new ROSLIB.Ros({
  url : 'ws://0.0.0.0:9090'
});

ros.on('error', function(error) {
  console.log('Error connecting to robot!');
  console.log(error);
});

ros.on('connection', function() {
  console.log('Connection to robot successful!');
});

ros.on('close', function() {
  console.log('Connection to robot closed.');
});

// Make sure robot is stopped by default
var eStopTopic = new ROSLIB.Topic({
  ros : ros,
  name : '/webapp/e_stop',
  messageType : 'std_msgs/Bool'
});

var estopMsg = new ROSLIB.Message({
    data: true
  });
eStopTopic.publish(estopMsg);

function startRobot() {
  // Send robot signal to start
  var estopMsg = new ROSLIB.Message({
    data: false
  });
  eStopTopic.publish(estopMsg);
}