const GameHasAlreadyWonError = require("./error/gameHasAlreadyWonError");

class Game {
  constructor(board, player, dices) {
    this._board = board;
    this._player = player;
    this._dices = dices;
  }

  addMonitor(monitor){
    this._monitor = monitor;
    this._board.addMonitor(monitor);
  }

  rollTheDice(){
    if(this._board.isPlayerOnLastPosition(this._player)){
      this._monitor && this._monitor.addPlayerWonGameActivity(this._player);
      throw new GameHasAlreadyWonError();
    }

    const total = this._dices.reduce((sum, dice) => {
      const number = dice.roll();
      this._monitor && this._monitor.addRolledDiceActivity(number);
      return sum + number;
    },0);

    this._board.movePlayer(this._player, total);
  }
}

module.exports = Game;