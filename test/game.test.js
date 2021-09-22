const Board = require("../src/Board");
const Game = require("../src/game");
const Player = require("../src/Player");
const dices = require("../src/Dice");

describe('rollTheDice', () => {
  it('should move player to position 4 from 0 after rolling dice', () => {
    const board = new Board(100);
    const player = new Player('Alice');
    const mockedDice = dices.NORMAL;
    mockedDice.roll = jest.fn(() => 4);

    const game = new Game(board, player, mockedDice);
    game.rollTheDice();

    expect(player.position).toBe(4);
  })

  it("should move player to position 10 from 20 when dice number is 1 and there is a snake at that position", () => {
    const board = new Board(100);
    board.addSnake(21, 10);
    const player = new Player("Alice", 20);
    const mockedDice = dices.NORMAL;
    mockedDice.roll = jest.fn(() => 1);

    const game = new Game(board, player, mockedDice);
    game.rollTheDice();

    expect(player.position).toBe(10);
  });
});