const GameHasAlreadyWonError = require("./error/GameHasAlreadyWonError");

class Game {
  constructor(board, player, dice) {
    this._board = board;
    this._player = player;
    this._dice = dice;
  }

  addMonitor(monitor){
    this._monitor = monitor;
    this._board.addMonitor(monitor);
  }

  rollTheDice(){
    if(this._board.isPlayerOnLastPosition(this._player)){
      throw new GameHasAlreadyWonError();
    }

    const number = this._dice.roll();
    this._monitor && this._monitor.addRolledDiceActivity(number);
    this._board.movePlayer(this._player, number);
  }
}

module.exports = Game;