const Dice = require("../src/Dice");

describe('roll', () => {
  it('should return any number between 1 to 6 when roll a normal dice', () => {
    const dice = new Dice();
    const number = dice.roll();

    expect(number <= 6).toBeTruthy();

  });

});