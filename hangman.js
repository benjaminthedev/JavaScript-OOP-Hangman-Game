const Hangman = function (word, guess) {
    this.word = word
    this.guess = guess
}

Hangman.prototype.game = function () {

}

const trying = new Hangman('hello', 4);
console.log(trying);

const tryingTwo = new Hangman('FreeCodeCamp', 6);
console.log(tryingTwo);