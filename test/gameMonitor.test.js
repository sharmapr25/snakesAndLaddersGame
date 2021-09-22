const GameMonitor = require("../src/GameMonitor");
const Player = require("../src/Player");
const Snake = require("../src/Snake");

describe('addPlayerMovementActivity', () => {
  it('should add player activity movement for a given player', () => {
    const gameMonitor = new GameMonitor();
    const player = new Player('Alice', 4);

    gameMonitor.addPlayerMovementActivity(player);
    const activities = gameMonitor.printActivites();

    const expectedActivities = "Alice has moved to 4";

    expect(activities).toBe(expectedActivities);
  })
});

describe("addRolledDiceActivity", () => {
  it("should add rolled dice number activity when number is 4", () => {
    const gameMonitor = new GameMonitor();
    gameMonitor.addRolledDiceActivity(4);
    const activities = gameMonitor.printActivites();

    const expectedActivities = "Rolled dice: 4";

    expect(activities).toBe(expectedActivities);
  });
});

describe("addSnakeBiteActivity", () => {
  it("should add snake biting and player position when snake and player on same position", () => {
    const gameMonitor = new GameMonitor();
    const snake = new Snake(14, 7);
    const player = new Player('Alice', 7);

    gameMonitor.addSnakeBiteActivity(snake, player);
    const activities = gameMonitor.printActivites();

    const expectedActivities = "Alice got bitten by snake at position: 14\nAlice has moved to 7";

    expect(activities).toBe(expectedActivities);
  });
});

describe("addPlayerWonGameActivity", () => {
  it("should add won game activity when player won the game", () => {
    const gameMonitor = new GameMonitor();
    const player = new Player("Alice", 100);

    gameMonitor.addPlayerWonGameActivity(player);
    const activities = gameMonitor.printActivites();

    const expectedActivities = "Congratulation Alice!! You have won the game";

    expect(activities).toBe(expectedActivities);
  });
});