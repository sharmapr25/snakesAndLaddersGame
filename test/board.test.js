const Board = require("../src/Board");
const Player = require("../src/Player");

describe('movePlayer', () => {
  it('should move player to 3rd position when roll a dice and number is 3', () => {
    const board = new Board(100);
    const alice = new Player('Alice');
    board.movePlayer(alice, 3);

    expect(alice.position).toEqual(3);
  })
});