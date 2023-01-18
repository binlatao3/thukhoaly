"use strict"
let audioPlaying = true,
backgroundAudio, browser;
browser = navigator.userAgent.toLowerCase();
$('<audio class="audio1" src="mp3/coaynoi.mp3" loop></audio>').prependTo('body');
if (!browser.indexOf('firefox') > -1) {
    $('<embed id="background-audio" src="mp3/coaynoi.mp3" autostart="true"></embed>').prependTo('body');
    backgroundAudio = setInterval(function() {
        $("#background-audio").remove();
        $('<embed id="background-audio" src="mp3/coaynoi.mp3"></embed>').prependTo('body');
    }, 120000); // 120000 is the duration of your audio which in this case 2 mins.
}