class Player{
  constructor(name, position=0){
    this._name = name;
    this._position = position;
  }

  get name(){
    return this._name;
  }
  
  get position(){
    return this._position;
  }

  set position(position){
    this._position = position;
  }
}

module.exports = Player;