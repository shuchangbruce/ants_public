'use strict';

var ants = require('./lib/ants_ui.js'); //load the game (UI-level) to interact with it

if(process.argv[2] === '--debug'){
  //the scenario to play
  var colony = ants.AntColony.createDefaultColony();
  var hive = ants.Hive.createTestHive();
  var game = new ants.AntGame(colony, hive);
  
  //run hard-coded commands
  game.deployAnt('Grower', '0,0'); //for example
  game.deployAnt('Thrower', '0,1');
  game.takeTurn(); //for example
  game.takeTurn();
  game.takeTurn();
  ants.showMapOf(game); //show the board, for example


  //ants.play(game); //launch the interactive version from here

}
else {
  //initialize the game to play (not interactively selected yet)
  var colony = ants.AntColony.createWetColony();
  var hive = ants.Hive.createInsaneHive(); // change to insane mode
  var game = new ants.AntGame(colony, hive);

  //start playing the game
  ants.play(game); 
}