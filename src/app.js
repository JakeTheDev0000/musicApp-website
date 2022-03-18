console.log("started")

/*
var audio = new Audio('audio_file.mp3');
audio.play();

*/

isPlayingSound = false

var getLuckyAudio = new Audio('audio/getLucky.mp3');

function stopSound(){
    isPlayingSound = false
    getLuckyAudio.pause()
    getLuckyAudio.currentTime = 0
}

function playGetLucky(){
    console.log(isPlayingSound)
    if(isPlayingSound){
        return
    }
    isPlayingSound = true
    
    getLuckyAudio.play();
    getLuckyAudio.onended = function(){
        isPlayingSound = false
    }
}