const Board = require("./src/board");
const dices = require("./src/dice");
const Game = require("./src/game");
const Player = require("./src/player");
const GameMonitor = require("./src/gameMonitor");

const board = new Board(100);
board.addSnake(17,7);
board.addSnake(37, 13);
board.addSnake(54, 34);

const player = new Player('lucky');

const gameMonitor = new GameMonitor();
const game = new Game(board, player, dices.NORMAL);
game.addMonitor(gameMonitor);

let turns = process.argv[2] || 10;
while(turns !== 0){
  try{
    game.rollTheDice();
    turns -= 1;
  }catch(error){
    turns = 0;
  }
}

console.log(gameMonitor.printActivites());