const View = require('./ttt-view.js');
const Game = require('./game.js');
// let view = new View(); // didnt specify to create view object like this, but assumed from instruct on new game()
// let game = new Game(); 

  $(() => {
    // Your code here
    const rootEl = $(".ttt");
    
    const game = new Game();
    new View(game, rootEl);
  });

