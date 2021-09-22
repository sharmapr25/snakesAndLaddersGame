class Board{
  constructor(size){
    this.size = size;
  }

  movePlayer(player, position){
    player.position = position;
  }

}

module.exports = Board;