const Hangman = function (word,limit){
    this.word =  word.toLowerCase().split('');
    this.limit = limit;
    this.showWordPara = document.getElementById("guessWord");
}

Hangman.prototype.getpuzzle = function (guessesWord){
    let puzzle = "";

    this.word.forEach((letter)=>{
        if (guessesWord.includes(letter) || letter === " "){
            puzzle += letter;
        }else{
            puzzle += "*";
        }
    })
    console.log(puzzle)
    console.log(this.limit)

    this.showWordPara.textContent = puzzle;
}


const game = new Hangman("Mohammad",2);

window.addEventListener("DOMContentLoaded",function (){
    for (let i = 0 ; i < game.word.length ; i++){
        game.showWordPara.textContent += "*";
    }

});

document.getElementById("hangmanInput").addEventListener("input",function (e){

    if (game.limit === 0){
        document.getElementById("wrong").style.display = "block";
        game.showWordPara.textContent = game.word;

        setTimeout(function (){
            location.reload();
        },2000)
        return 0;
    }
    game.getpuzzle(e.target.value);

})

