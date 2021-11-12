
let req = new XMLHttpRequest();

req.addEventListener("readystatechange" , (e)=>{

    if (e.target.readyState === 4){

        let data = JSON.parse(e.target.responseText);
        class Hangman {
            constructor(word,limit) {
                this.word =  word.toLowerCase().split('');
                this.limit = limit;
                this.guessesWord = [];
                this.showWordPara = document.getElementById("guessWord");
                this.showLimitOnPage = document.getElementById("showLimitOnPage");
            }

            getpuzzle(){

                let puzzle = "";

                this.word.forEach((letter)=>{
                    if (this.guessesWord.includes(letter) || letter === " "){
                        puzzle += letter;
                    }else {
                        puzzle += "*";
                    }
                })

                this.showWordPara.textContent = puzzle;

                return puzzle;
            }

            getgusses(guess){
                let isUnique = !this.guessesWord.includes(guess);
                if (isUnique){
                    game.guessesWord.push(guess)
                }

                if (isUnique && !game.word.includes(guess)){
                    this.limit--;
                }
            }

        }

        const game = new Hangman(data.puzzle,2);

            for (let i = 0 ; i < game.word.length ; i++){
                game.showWordPara.textContent += "*";
            }

            game.showLimitOnPage.textContent = game.limit;


        document.getElementById("hangmanInput").addEventListener("keypress",function (e){

            game.getgusses(e.key)

            if (!game.limit) {
                document.getElementById("wrong").style.display = "block";
                document.getElementById("originalWord").innerHTML = data.puzzle;
                // location.reload();
                return;
            }

            game.showLimitOnPage.textContent = game.limit;

            console.log(game.getpuzzle())

            let wordtemprary = game.word.join("");
            if (wordtemprary.includes(game.showWordPara.textContent.toLowerCase())){
                document.getElementById("success").style.display = "block";
                location.reload();
            }

        })
    }

});



req.open("GET","https://puzzle.mead.io/puzzle");

req.send();

