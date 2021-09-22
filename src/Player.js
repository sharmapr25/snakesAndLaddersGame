class Player{
  constructor(name){
    this._name = name;
    this._position = 0;
  }

  get position(){
    return this._position;
  }

  set position(position){
    this._position = position;
  }
}

module.exports = Player;