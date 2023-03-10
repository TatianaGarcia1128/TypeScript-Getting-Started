// /// <reference path="player.ts" />
// /// <reference path="game.ts" />
import { Player } from './player';
import { Game } from './game';
import * as Helpers from './utility';

let newGame: Game;

//* Add click hander to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player('inicio');
    player.name = Helpers.getValue('playername');

    const problemCount: number = Number(Helpers.getValue('problemCount'));
    const factor: number = Number(Helpers.getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

//* Add click handler to tha calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});

