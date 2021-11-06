const Hangman = function (word,limit){
    this.word =  word.toLowerCase().split('');
    this.limit = limit;
    this.guessesWord = [];
    this.showWordPara = document.getElementById("guessWord");
}

Hangman.prototype.getpuzzle = function (){
    let puzzle = "";

    this.word.forEach((letter)=>{
        if (this.guessesWord.includes(letter) || letter === " "){
            puzzle += letter;
        }else{
            puzzle += "*";
        }
    })

    this.showWordPara.textContent = puzzle;

    return puzzle;
}

Hangman.prototype.getgusses = function (guess){

    let isUnique = !this.guessesWord.includes(guess);
    if (isUnique){
        game.guessesWord.push(guess)
    }

    if (isUnique && !game.word.includes(guess)){
        this.limit--;
    }

    console.log(this.limit)

}

const game = new Hangman("Mohammad",2);

window.addEventListener("DOMContentLoaded",function (){
    for (let i = 0 ; i < game.word.length ; i++){
        game.showWordPara.textContent += "*";
    }

});

document.getElementById("hangmanInput").addEventListener("keypress",function (e){

    game.getgusses(e.key)

    console.log(game.getpuzzle())
})


