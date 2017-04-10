var C = new Audio('audio/136942__stomachache__c1.wav');
var A = new Audio('audio/136945__stomachache__a2.wav');
var E = new Audio('audio/136951__stomachache__e1.wav');
var G = new Audio('audio/136952__stomachache__g1.wav');

C.addEventListener("timeupdate", function() {
    if (C.currentTime >=1) {
	C.currentTime = 0;
    } 
});

var currentlyPlaying;

function playG() {
    if (typeof(currentlyPlaying) != "undefined") {
	currentlyPlaying.pause();
	currentlyPlaying.currentTime = 0;
    }
    currentlyPlaying = G;
    G.loop = true;
    G.play();
};
function playC() {
    if (typeof(currentlyPlaying) != "undefined") {
	currentlyPlaying.pause();
	currentlyPlaying.currentTime = 0;
    }
    currentlyPlaying = C;
    C.loop = true;
    C.play();
};
function playE() {
    if (typeof(currentlyPlaying) != "undefined") {
	currentlyPlaying.pause();
	currentlyPlaying.currentTime = 0;
    }
    currentlyPlaying = E;
    E.loop = true;
    E.play();
};
function playA() {
    if (typeof(currentlyPlaying) != "undefined") {
	currentlyPlaying.pause();
	currentlyPlaying.currentTime = 0;
    }
    currentlyPlaying = A;
    A.loop = true;
    A.play();
};
function stopAll() {
    if (typeof(currentlyPlaying) != "undefined") {
	currentlyPlaying.pause();
	currentlyPlaying.currentTime = 0;
    }
};
