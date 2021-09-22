const Snake = require("./Snake");

class Board {
  constructor(size) {
    this._size = size;
    this._snakes = [];
  }

  addSnake(snakePosition, length) {
    this._snakes.push(new Snake(snakePosition, length));
  }

  _getAnySnakeOnPosition(playerPosition) {
    return this._snakes.find((snake) => snake.isOnSamePosition(playerPosition));
  }

  _addNewPosition(player, positionToMove){
    const newPosition = player.position + positionToMove;
    player.position = newPosition > this._size ? this._size: newPosition;

  }

  movePlayer(player, position) {
    this._addNewPosition(player, position);
    this._monitor && this._monitor.addPlayerMovementActivity(player);
    const snake = this._getAnySnakeOnPosition(player.position);
    if (snake) {
      snake.bite(player);
      this._monitor && this._monitor.addSnakeBiteActivity(snake, player);
    }
  }

  addMonitor(monitor) {
    this._monitor = monitor;
  }

  isPlayerOnLastPosition(player){
    return this._size === player.position;
  }
}

module.exports = Board;