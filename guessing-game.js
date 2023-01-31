function guessingGame() {
    let num = Math.floor(Math.random() * 99 );
    let count = 0;
    let hasWon = false;

    return function game(guess){
        if(hasWon) return 'The game is over, you already won!';

        if (guess < num) {
            count++;
            return `${guess} is too low!`;
        };
        if(guess > num) {
            count++;
            return `${guess} is too high`;
        };
        if(guess === num) {
            hasWon = true;
            return `You win! You got ${num} in ${count} guesses.`;
        };
       
    };
};

module.exports = { guessingGame };
