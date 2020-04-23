"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
    
    var date = new Date();
    var hr = date.getHours(); 
    var min = date.getMinutes(); 
    var sec = date.getSeconds();
    var session = "AM";
    
    if(hr == 0){
        hr = 12;
    }
    
    if(hr > 12){
        hr = hr - 12;
        session = "PM";
    }
    
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    var time = hr + ":" + min + ":" + sec + " " + session;
    document.getElementById("clock").innerText = time;    
    setTimeout(displayCurrentTime, 1000);

};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function() {
    displayCurrentTime();
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
};