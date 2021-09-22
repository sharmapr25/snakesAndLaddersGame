const Board = require("../src/board");
const Game = require("../src/game");
const Player = require("../src/player");
const dices = require("../src/dice");
const GameHasAlreadyWonError = require("../src/error/gameHasAlreadyWonError");

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

  it("should move player to the same position as 7 when roll the dice twice with acquired numbers 3 and 4 and there is a snake at 14th position", () => {
    const board = new Board(100);
    board.addSnake(14, 7);
    const player = new Player("Alice", 7);
    const mockedDice = dices.NORMAL;
    const game = new Game(board, player, mockedDice);

    //mock dice to return number 3
    mockedDice.roll = jest.fn(() => 3);

    game.rollTheDice();

    //mock dice to return number 3
    mockedDice.roll = jest.fn(() => 4);

    game.rollTheDice();

    expect(player.position).toBe(7);
  });

  it("should throw GameHasAlreadyWonError when player roll the dice and player reached the board last position", () => {
    const board = new Board(4);
    const player = new Player("Alice");
    const mockedDice = dices.NORMAL;
    mockedDice.roll = jest.fn(() => 4);

    const game = new Game(board, player, mockedDice);
    game.rollTheDice();

    expect(player.position).toBe(4);
    expect(() => game.rollTheDice()).toThrow(GameHasAlreadyWonError);
  });

});