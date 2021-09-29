const Snake = require("./Snake");

class GreenSnake extends Snake {
  action(player) {
    player.position = (this._headPosition + this._tailPosition)/2;
  }
}

module.exports = GreenSnake;