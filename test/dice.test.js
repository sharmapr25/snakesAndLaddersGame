const dices = require("../src/Dice");

describe('roll', () => {
  it('should return any number between 1 to 6 when roll a normal dice', () => {
    const number = dices.NORMAL.roll();
    expect(number <= 6).toBeTruthy();
  });

  it("should return any even number between 1 to 6 when roll a crooked even dice", () => {
    const number = dices.CROOKED_EVEN.roll();

    expect(number <= 6).toBeTruthy();
    expect(number%2==0).toBeTruthy();
  });



});