const game = {
  title: 'Guess The Number!',
  biggestNum: 100, 
  smallestNum: 0, 
  guess: null,
  prevGuesses: [],
  secretNum: null, 
  getGuess: function(){
    this.guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    while (isNaN(this.guess) || this.guess >= this.biggestNum || this.guess <= this.smallestGuess) {
    this.guess = parseInt(prompt(`This answer is not valid! Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    }
  },
  play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum)
      this.getGuess();
      while (this.guess !== this.secretNum) {
        this.prevGuesses.push(this.guess) 
        console.log(this.prevGuesses)
      this.getGuess();
      this.render();
      } 
    },
    render: function() {
      let msg;
      if (this.guess === this.secretNum) {
        msg = `Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"
      }!`;
     } else {
        msg = `Your guess is too ${
          this.guess> this.secretNum
          ? 'high'
          : 'low'
        }\nPrevious guesses: ${this.prevGuesses.join(', ')}`;
      }
      alert(msg);
    }
  }
game.play();
