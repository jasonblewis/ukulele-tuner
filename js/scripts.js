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

function myLoop(element,note) {
    if (typeof(currentlyPlaying) != 'undefined') {
	standard.stop(currentlyPlaying);
    }
    
    standard.stop();
    if (note != currentlyPlaying) {
	standard.play(note);
	currentlyPlaying = note;
	var el = document.getElementsByClassName("active");
	for (var i = 0; i < el.length; i++) {
	    el[i].classList.remove('active');
	    el[i].classList.remove('btn-primary');
	    el[i].classList.add('btn-default');
	    
	}
	element.classList.add("active");
	element.classList.add('btn-primary');
	element.classList.remove('btn-default');
	
    } else {
	currentlyPlaying = undefined;
	element.classList.remove("active");
	element.classList.remove('btn-primary');
	element.classList.add('btn-default');
    }
    
}

function buttonPressed() {
    if (this.id == currentlyPlaying) {
	toggleButton(this.id);
    } else {
	radioButton(this.id);
    }
}

function toggleButton(buttonId) {
    document.getElementById(buttonId).classList.remove('active','btn-primary');
    document.getElementById(buttonId).classList.add('btn-default');
    currentlyPlaying = undefined;
}

function radioButton(buttonId) {
    var el = document.getElementById("buttons").querySelectorAll(".active");
    for (var i = 0; i < el.length; i++) {
	el[i].classList.remove('active','btn-primary');
	el[i].classList.add('btn-default');
    }
    
    document.getElementById(buttonId).classList.add("active", "btn-primary");
    currentlyPlaying = buttonId;
}

function playNext() {
    if (typeof currentlyPlaying === 'undefined') { // it's undefined
	// start playing the first string
	radioButton(strings[0]);
    } else {
	// move to next string, loop around if we are on the last one
	console.log(strings);
	console.log(currentlyPlaying);
	console.log(strings.indexOf(currentlyPlaying));
	radioButton(strings[(strings.indexOf(currentlyPlaying)+1) % strings.length]);
    }
}

document.addEventListener('DOMContentLoaded', function () {

    Array.prototype.slice.call(
	document.querySelectorAll("#g,#c,#e,#a")
    ).forEach(function(el) {
	el.addEventListener("click", buttonPressed);
    });
    document.getElementById("next").addEventListener("click", playNext);
}, false);
