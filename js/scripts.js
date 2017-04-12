var looplength = 1500;
var standard = new Howl({
    "src": [
	"audio/standard.ogg",
	"audio/standard.m4a",
	"audio/standard.mp3",
	"audio/standard.ac3"
    ],
    "sprite": {
	"a": [
	    0,
	    looplength
	],
	"c": [
	    4000,
	    looplength
	],
	"e": [
	    9000,
	    looplength
	],
	"g": [
	    12000,
	    looplength
	]
    }
});
standard.loop(true);

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
	}
	element.classList.add("active");
	
    } else {
	currentlyPlaying = undefined;
	element.classList.remove("active");
    }
    
}
