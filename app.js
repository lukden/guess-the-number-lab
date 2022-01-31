const game = {
  title: 'Guess The Number!',
  biggestNum: 100, 
  smallestNum: 0, 
  prevGuesses: [],
  secretNum: null, 
  getGuess: function(){
    console.log(`Enter a guess between ${smallestNum} and ${biggestNum}.`)
  },
  play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    }
}


console.log(game.play())
