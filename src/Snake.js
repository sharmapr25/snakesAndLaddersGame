class Snake{
  constructor(headPosition, tailPosition){
    this.headPosition = headPosition;
    this._tailPosition = tailPosition;
  }

  isOnSamePosition(playerPosition){
    return this.headPosition === playerPosition;
  }

  bite(player){
    player.position = this._tailPosition;
  }

}

module.exports = Snake;