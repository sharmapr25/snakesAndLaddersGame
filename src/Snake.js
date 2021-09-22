class Snake{
  constructor(headPosition, tailPosition){
    this._headPosition = headPosition;
    this._tailPosition = tailPosition;
  }

  isOnSamePosition(playerPosition){
    return this._headPosition === playerPosition;
  }

  get headPosition(){
    return this._headPosition;
  }

  bite(player){
    player.position = this._tailPosition;
  }

}

module.exports = Snake;