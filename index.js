const Board = require("./src/board");
const dices = require("./src/dice");
const Game = require("./src/game");
const Player = require("./src/player");
const GameMonitor = require("./src/gameMonitor");
const Snake = require("./src/Snake");
const GreenSnake = require("./src/GreenSnake");

const board = new Board(100);

board.addObject(new Snake(17, 7));
board.addObject(new Snake(37, 13));
board.addObject(new Snake(54, 34));
board.addObject(new GreenSnake(14, 4));


const player = new Player('lucky');

const gameMonitor = new GameMonitor();
const game = new Game(board, player, [dices.NORMAL, dices.CROOKED_EVEN]);
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