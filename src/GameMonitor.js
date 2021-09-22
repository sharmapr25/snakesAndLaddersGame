class GameMonitor {
  constructor() {
    this._acivities = [];
  }

  addPlayerMovementActivity(player) {
    this._acivities.push(`${player.name} has moved to ${player.position}`);
  }

  addRolledDiceActivity(number) {
    this._acivities.push(`Rolled dice: ${number}`);
  }

  addSnakeBiteActivity(snake, player){
    this._acivities.push(`${player.name} got bitten by snake at position: ${snake.headPosition}`);
    this.addPlayerMovementActivity(player);
  }

  printActivites() {
    return this._acivities.join("\n");
  }
}

module.exports = GameMonitor;