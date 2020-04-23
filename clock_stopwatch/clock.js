"use strict";
var $ = function(id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object
var stopwatchTimer;
var elapsedMinutes = 0;
var elapsedSeconds = 0;
var elapsedMilliseconds = 0;
var t;
var s_minutes=0;
var s_seconds=0;
var s_ms=0;
var displayCurrentTime = function() {
    var now = new Date();
    var hours = now.getHours();
    var ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    
    $("hours").firstChild.nodeValue = hours;
    $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());
    $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());
    $("ampm").firstChild.nodeValue = ampm;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

var tickStopwatch = function() {    
    // increment milliseconds by 10 milliseconds
    elapsedMilliseconds+=10;
    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if( elapsedMilliseconds == 1000 ){
        elapsedSeconds++;
        elapsedMilliseconds = 0;
    // if seconds total 60, increment minutes by one and reset seconds to zero
      if(elapsedSeconds == 60){
        elapsedMinutes++;
        elapsedSeconds = 0;
    }
    }
    //display new stopwatch time
    $("s_minutes").firstChild.nodeValue = elapsedMinutes;
    $("s_seconds").firstChild.nodeValue = elapsedSeconds;
    $("s_ms").firstChild.nodeValue = elapsedMilliseconds; 
    timer();
};

function timer() {
    t = setTimeout(tickStopwatch, 100);
}

// event handler functions
var startStopwatch = function(evt) {
    // prevent default action of link
    if(!evt){
        evt = window.event;
    }
    if(evt.preventDefault)
{
     evt.preventDefault();   
}
    else{
        evt.returnValue = false;
    }
      
    timer();
    // do first tick of stop watch and then set interval timer to tick 
    //var link = document.getElementsById("start");    
    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
    // variable so next two functions can stop timer.
    
};

var stopStopwatch = function(evt) {
    // prevent default action of link
       
           clearTimeout(t);
       
    // stop timer
    
};

var resetStopwatch = function(evt) {
    // prevent default action of link
 
    sclock.textContent = "00:00:00";
        s_minutes = 0; 
        s_seconds= 0;
        s_ms = 0;

    // stop timer
        
    // reset elapsed variables and clear stopwatch display
    
};

window.onload = function() {
    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
    // set up stopwatch event handlers

};