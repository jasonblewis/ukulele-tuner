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


var standardold = new Howl({
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
