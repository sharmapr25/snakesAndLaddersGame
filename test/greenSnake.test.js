const GreenSnake = require("../src/GreenSnake");
const Player = require("../src/Player");

describe('bite', () => {
  it("should change player position to 9 when snake bite a player with head on 14 and tail on position 4", () => {
    const snake = new GreenSnake(14, 4);
    const player = new Player("Alice", 14);
    snake.action(player);

    expect(player.position).toBe(9);
  });

    it("should change player position to 13 when snake bite a player with head on 18 and tail on position 8", () => {
      const snake = new GreenSnake(18, 8);
      const player = new Player("Alice", 18);
      snake.action(player);

      expect(player.position).toBe(13);
    });

});