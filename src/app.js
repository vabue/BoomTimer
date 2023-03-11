import Timer from "easytimer.js";
import $ from "jquery";

var timer = new Timer();

let audioUrl = new URL("../sounds/boom.mp3", import.meta.url);
let audioTickingUrl = new URL("../sounds/tick.mp3", import.meta.url);

$("#chronoExample .playBoom").click(function () {
  var audio = new Audio(audioUrl);
  audio.play();
});

function timerWithSound(secs) {
  timer.stop();
  timer.start({
    precision: "seconds",
    countdown: true,
    startValues: { seconds: secs },
    target: { seconds: 0 },
  });
  $("#chronoExample .values").html(timer.getTimeValues().toString());
  var audio = new Audio(audioTickingUrl);
  audio.play();
}

$("#chronoExample .3secTimer").click(function () {
  timerWithSound(3);
});

$("#chronoExample .5minutesTimer").click(function () {
  timerWithSound(5 * 60);
});

$("#chronoExample .10minutesTimer").click(function () {
  timerWithSound(10 * 60);
});

$("#chronoExample .15minutesTimer").click(function () {
  timerWithSound(15 * 60);
});

$("#chronoExample .30minutesTimer").click(function () {
  timerWithSound(30 * 60);
});

timer.addEventListener("secondsUpdated", function (e) {
  $("#chronoExample .values").html(timer.getTimeValues().toString());
});

timer.addEventListener("targetAchieved", function (e) {
  $("#chronoExample .values").html("BOOM!!");
  var audio = new Audio(audioUrl);
  audio.play();
});
