var looplength = 1500;

var standard = new Howl({
  "src": [
    "audio/aleho-acoustic.ogg",
    "audio/aleho-acoustic.m4a",
    "audio/aleho-acoustic.mp3",
    "audio/aleho-acoustic.ac3"
  ],
  "sprite": {
    "a": [
      0,
      looplength
    ],
    "c": [
      6000,
      looplength
    ],
    "e": [
      12000,
      looplength
    ],
    "g": [
      18000,
      looplength
    ]
  }
});

standard.loop(true);

var strings = ["g","c","e","a"];

var currentlyPlaying;

function buttonPressed() {
    standard.stop();
    if (this.id == currentlyPlaying) {
	offButton(this.id);
    } else {
	radioButton(this.id);
    	standard.play(this.id);
}
}

function offButton(buttonId) {
    document.getElementById(buttonId).classList.remove('active','btn-primary');
    document.getElementById(buttonId).classList.add('btn-default');
    standard.stop();
    currentlyPlaying = undefined;
}

function radioButton(buttonId) {
    var el = document.getElementById("buttons").querySelectorAll(".active");
    for (var i = 0; i < el.length; i++) {
	el[i].classList.remove('active','btn-primary');
	el[i].classList.add('btn-default');
    }
    
    document.getElementById(buttonId).classList.add("active", "btn-primary");
    standard.stop();
    currentlyPlaying = buttonId;
    standard.play(buttonId);
}

function playNext() {
    if (typeof currentlyPlaying === 'undefined') { // it's undefined
	// start playing the first string
	radioButton(strings[0]);
    } else {
	// move to next string, loop around if we are on the last one
	radioButton(strings[(strings.indexOf(currentlyPlaying)+1) % strings.length]);
    }
}

function stopAll() {
    var el = document.getElementById("buttons").querySelectorAll(".active");
    for (var i = 0; i < el.length; i++) {
	el[i].classList.remove('active','btn-primary');
	el[i].classList.add('btn-default');
    }
    standard.stop();
    currentlyPlaying = undefined;
}

var delta = 300;
var lastKeypressTime = 0;
function keydown(event) {
    var thisKeypressTime = new Date();
    if ( thisKeypressTime - lastKeypressTime <= delta )  {
	stopAll();
        // optional - if we'd rather not detect a triple-press
        // as a second double-press, reset the timestamp
        thisKeypressTime = 0;
	
    } else { 
	if (event.keyCode == 32) {
	    event.preventDefault();

            playNext();
	}
	lastKeypressTime = thisKeypressTime;
    }
}

document.addEventListener('DOMContentLoaded', function () {

    Array.prototype.slice.call(
	document.querySelectorAll("#g,#c,#e,#a")
    ).forEach(function(el) {
	el.addEventListener("click", buttonPressed);
    });
    document.getElementById("next").addEventListener("click", playNext);
    document.getElementById("stop").addEventListener("click", stopAll);
    document.addEventListener("keydown",keydown);
}, false);
