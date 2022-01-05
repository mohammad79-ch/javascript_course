let sounds = [
  "sound1","sound2","sound3","sound4"
];

sounds.forEach(sound=>{
    let btn = document.createElement("button");

    btn.innerText = sound;

    document.body.appendChild(btn);

    let getSoundHtml = document.getElementById(sound);

    getSoundHtml.play;
})