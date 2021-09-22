const Board = require("../src/Board");
const Player = require("../src/Player");

describe('movePlayer', () => {
  it("should move player to 3rd position when roll a dice and number is 3", () => {
    const board = new Board(100);
    const alice = new Player("Alice");
    board.movePlayer(alice, 3);

    expect(alice.position).toEqual(3);
  });

  it("should move player to 10th position when roll a dice and number is 6 and player position is 4", () => {
    const board = new Board(100);
    const alice = new Player("Alice", 4);
    board.movePlayer(alice, 6);

    expect(alice.position).toEqual(10);
  });

  it("should move player to 7 for given dice number is 4 when player current position is 10 and there is a snake at position 14", () => {
    const board = new Board(100);
    const alice = new Player("Alice", 10);
    board.addSnake(14, 7);
    board.movePlayer(alice, 4);
    expect(alice.position).toEqual(7);
  });

  it("should move player to 10 for given dice number is 4 when player current position is 6 and there is a snake at position 14", () => {
    const board = new Board(100);
    const alice = new Player("Alice", 6);
    board.addSnake(14, 7);
    board.movePlayer(alice, 4);
    expect(alice.position).toEqual(10);
  });
});

describe("isPlayerOnLastPosition", () => {
  it('should return true when given player is on same position as board size', () => {
    const board = new Board(100);
    const alice = new Player("Alice", 100);

    expect(board.isPlayerOnLastPosition(alice)).toBeTruthy();

  });

   it("should return false when given player is not on the same position as board size", () => {
     const board = new Board(100);
     const alice = new Player("Alice", 10);

     expect(board.isPlayerOnLastPosition(alice)).toBeFalsy();
   });
});