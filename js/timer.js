var sec = 60;

function startfunction() {
var starttime = Date.now();
var endtime = new Date(starttime.getTime() + sec * 1000);

var showtime = document.getElementById("drawingpage__timer-id"); 

var cnt = sec;
var id = setInterval(
  function() {
    cnt--;
    showtime.innerHTML(cnt);
    dt = new Date();
    if(dt.getTime() >= endtime.getTime()){
      clearInterval(id);
      showtime.innerHTML("Finish!");
    }
  }, 1000);

};


