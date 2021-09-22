const Board = require("../src/Board");
const Player = require("../src/Player");

describe('movePlayer', () => {
  it('should move player to 3rd position when roll a dice and number is 3', () => {
    const board = new Board(100);
    const alice = new Player('Alice');
    board.movePlayer(alice, 3);

    expect(alice.position).toEqual(3);
  });

    it("should move player to 10th position when roll a dice and number is 6 and player position is 4", () => {
      const board = new Board(100);
      const alice = new Player("Alice", 4);
      board.movePlayer(alice, 6);

      expect(alice.position).toEqual(10);
    });
});