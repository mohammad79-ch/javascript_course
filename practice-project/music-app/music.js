let musicName = document.getElementById("music-name"),
    singerName = document.getElementById("singer-name"),
    prev = document.getElementById("prev"),
    next = document.getElementById("next"),
    stop = document.getElementById("pause"),
    audioBox = document.getElementById("audio_box"),
    audioParent = document.getElementById("audio");

let musicNumber = 0;


let musicNameList = ["Billie_Eilish-_Bad_Guy_320",
    "blackpink_-_how_you_like_that",
    "Come Back To Me(joyamusic)(128)",
    "dj_alireza_-_chedi_weldek_aliya",
    "Eminem .. lose yourself_(ahangchin.ir)",
    "lil-nas-x-montero-call-me-by-your-name-320",
    "nk_elefante_128"
];


document.addEventListener("DOMContentLoaded", (e) => {
    makeAudio(musicNumber)
})

prev.addEventListener("click", (e) => {
    musicNumber--
    if (musicNumber < 0) {
        musicNumber = musicNameList.length - 1
        makeAudio(musicNumber)
    } else {
        makeAudio(musicNumber)
    }
    reload();
    play()
})


next.addEventListener("click", (e) => {
    musicNumber++;
    if (musicNumber > musicNameList.length - 1) {
        musicNumber = 0
        makeAudio(musicNumber)
    } else {
        makeAudio(musicNumber)
    }
    reload();
    play()
})

stop.addEventListener("click", () => {
    if (isPlaying(audioParent)){
        pause();
    }else{
        play()
    }

})

function play() {
    audioParent.play();
}

function reload() {
    audioParent.load();
}

function makeAudio(musicNumber) {
    audio = new Audio("musics/" + musicNameList[musicNumber] + ".mp3");
    audioBox.src = audio.src;
}

function pause() {
    audioParent.pause();
}

function isPlaying(audelem) {
    return !audelem.paused;
}
