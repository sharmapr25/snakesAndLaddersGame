# snakesAndLaddersGame
It is a game of snakes and ladders where a player roll a dice and based on the luck climb on a ladder or get bite by the snake.

<img src="https://5.imimg.com/data5/SELLER/Default/2021/2/HK/IO/BL/12304017/snakes-and-ladders-game-board-500x500.jpg" width="200" height="200"/>


## Prequestics
* node v14.17.3
* npm

## Setup
```
npm init
```

## Feature
* Snakes: Player will traverse back to snake tail whenever any snake bite.
* Dice: There are two types of dice available for this game
  * Normal: this dice will give number between 1 to 6 on throwing
  * Crooked: this dice will always give even number between 1 to 6.


## How to run
```
node index.js 20
```

*Note*: 20 here is representing turn for a given game. If no input provided then index.js will run game with 10 turn as by default


## Tests
```
npm test
```
or
```
 npm run test -- --coverage --watchAll=false
```


