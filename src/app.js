console.log("started")

/*
var audio = new Audio('audio_file.mp3');
audio.play();

THIS IS THE WORST CODE I HAVE EVER WRITTEN, im sorry
*/

isPlayingSound = false

var SoundAudio = new Audio('audio/getLucky.mp3');

const musicPlayerTimeCurrent = document.getElementById('musicPlayerTimeCurrent').innerHTML
const musicPlayerTimeTotal = document.getElementById('musicPlayerTimeTotal').innerHTML

function stopSound(){
    isPlayingSound = false
    SoundAudio.pause()
    SoundAudio.currentTime = 0
}
function pauseSound(){
    isPlayingSound = false
    SoundAudio.pause()
}
/* GET LUCKY */  
function playSound(){
    console.log(isPlayingSound)
    if(isPlayingSound){
        return
    }
    isPlayingSound = true
    
    SoundAudio.play();
    SoundAudio.onended = function(){
        isPlayingSound = false
    }
}

musicPlayerTimeCurrent.innerHTML = SoundAudio.currentTime
setInterval(function(){
    console.log("interval")
    musicPlayerTimeCurrent.innerHTML = SoundAudio.currentTime
},1000)


