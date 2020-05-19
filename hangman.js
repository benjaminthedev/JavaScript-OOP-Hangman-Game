const Hangman = function (word, guess) {
    this.word = word.toLowerCase().split('');
    this.guess = guess;
    this.guessedLetters = ['c', 'e'];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })


    return puzzle;
}

const game1 = new Hangman('cat', 2);
console.log(game1.getPuzzle());

const match1 = new Hangman('FreeCodeCamp', 6);
console.log(match1.getPuzzle());