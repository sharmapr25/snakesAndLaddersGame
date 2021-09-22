const Snake = require("./Snake");

class Board {
  constructor(size) {
    this.size = size;
    this.snakes = [];
  }

  addSnake(snakePosition, length) {
    this.snakes.push(new Snake(snakePosition, length));
  }

  _getAnySnakeOnPosition(playerPosition) {
    return this.snakes.find((snake) => snake.isOnSamePosition(playerPosition));
  }

  movePlayer(player, position) {
    player.position = player.position + position;
    this._monitor && this._monitor.addPlayerMovementActivity(player);
    const snake = this._getAnySnakeOnPosition(player.position);
    if(snake){
      snake.bite(player);
      this._monitor && this._monitor.addSnakeBiteActivity(snake, player);
    }
  }

  addMonitor(monitor){
    this._monitor = monitor;
  }
}

module.exports = Board;