class Dice{
  constructor(numbers=[]){
    this.numbers = numbers;
  }

  roll(){
    const index = Math.floor(Math.random() * this.numbers.length);
    return this.numbers[index];
  }
}

const dices = {
  CROOKED_EVEN: new Dice([2,4,6]),
  NORMAL: new Dice([1,2,3,4,5,6])
}


module.exports = dices;