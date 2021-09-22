const Snake = require("./Snake");

class Board {
  constructor(size) {
    this.size = size;
    this.snakes = [];
  }

  addSnake(snakePosition, length) {
    this.snakes.push(new Snake(snakePosition, length));
  }

  _getAnySnakeOnPosition(playerPosition){
    return this.snakes.find(snake => snake.isOnSamePosition(playerPosition));
  }

  movePlayer(player, position) {
    player.position = player.position + position;
    const snake = this._getAnySnakeOnPosition(player.position);
    snake && snake.bite(player);
  }
}

module.exports = Board;