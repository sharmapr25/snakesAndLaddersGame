const Player = require("../src/Player");
const Snake = require("../src/Snake");

describe("isOnSamePosition", () => {
  it('should return true when snake is on the same position', () => {
    const snake = new Snake(10,5);
    const result = snake.isOnSamePosition(10);
    expect(result).toBeTruthy();
  });

  it("should return false when snake is not on the same position", () => {
    const snake = new Snake(10, 5);
    const result = snake.isOnSamePosition(14);
    expect(result).toBeFalsy();
  });
});

describe('bite', () => {
  it('should change player position to 7 when snake bite a player with tail on position 7', () => {
    const snake = new Snake(14, 7);
    const player = new Player('Alice', 14);
    snake.action(player);

    expect(player.position).toBe(7);

  });

  it("should change player position to 5 when snake bite a player with tail on position 5", () => {
    const snake = new Snake(14, 5);
    const player = new Player("Alice", 14);
    snake.action(player);

    expect(player.position).toBe(5);
  });

  it("should change player position to 5 when snake bite a player with tail on position 5", () => {
    const snake = new Snake(14, 5);
    const player = new Player("Alice", 14);
    snake.action(player);

    expect(player.position).toBe(5);
  });
});