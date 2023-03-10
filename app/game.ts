// /// <reference path="utility.ts" />
// /// <reference path="result.ts" />
// /// <reference path="player.ts" />
// /// <reference path="scoreboard.ts" />
import { getValue } from './utility';
import { Result } from './result';
import { Player } from './player';
import { Scoredboard as ResultPanel } from './scoreboard';

export class Game {
    private scoreboard: ResultPanel = new ResultPanel();
    // player: Player;
    // problemCount: number;
    // factor: number;

    constructor (public player: Player, public problemCount: number, public factor: number) {
        // this.player = newPlayer;
        // this.problemCount = numOfProblems;
        // this.factor = multFactor;
    }

    displayGame(): void {
        //* Create the html for the current game
        let gameForm: string = '';
        for (let i = 1; i <= this.problemCount; i++){
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '"class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '"size="5" /></div>';
            gameForm += '</div>'; 
        }

        //* Add the new game to the page
        const gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        //* Enable the calculate score button
        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {
        let score: number = 0;

        //* Loop throught the text boxes and calculate the number that are correct
        for (let i=1; i <= this.problemCount; i++ ) {
            const answer: number = Number(getValue('answer' + i));
            if (i * this.factor === answer ) {
                score ++;
            }
        }

        //* Create a new result object to pass to the scoreboard
        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        //* Add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        //* Disable the calculate score button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');

    }
}



