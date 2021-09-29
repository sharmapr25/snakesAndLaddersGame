const Snake = require("./snake");

class Board {
  constructor(size) {
    this._size = size;
    this._objects = [];
  }

  addObject(snake) {
    this._objects.push(snake);
  }

  _getAnyObjectOnPosition(playerPosition) {
    return this._objects.find((object) => object.isOnSamePosition(playerPosition));
  }

  _addNewPosition(player, positionToMove) {
    const newPosition = player.position + positionToMove;
    player.position = newPosition > this._size ? this._size : newPosition;
  }

  movePlayer(player, position) {
    this._addNewPosition(player, position);
    this._monitor && this._monitor.addPlayerMovementActivity(player);
    const snake = this._getAnyObjectOnPosition(player.position);
    if (snake) {
      snake.action(player);
      this._monitor && this._monitor.addSnakeBiteActivity(snake, player);
    }
  }

  addMonitor(monitor) {
    this._monitor = monitor;
  }

  isPlayerOnLastPosition(player) {
    return this._size === player.position;
  }
}

module.exports = Board;