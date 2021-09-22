class Game {
  constructor(board, player, dice){
    this._board = board;
    this._player = player;
    this._dice = dice;
  }

  rollTheDice(){
    const number = this._dice.roll();
    this._board.movePlayer(this._player, number);
  }
}

module.exports = Game;