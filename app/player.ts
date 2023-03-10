// /// <reference path="person.ts" />
import { Person } from './person';

//* Implements me indicá que implementaré la interfaz Person
export class Player implements Person {
    // name: string;
    // age?: number;
    // highScore: number;

    constructor (public name: string, public highScore?: number, public age?: number) {};
    
    formatName() {
        return this.name.toUpperCase();
    }
}