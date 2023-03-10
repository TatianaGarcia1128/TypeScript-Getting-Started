"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, highScore, age) {
        this.name = name;
        this.highScore = highScore;
        this.age = age;
    }
    ;
    formatName() {
        return this.name.toUpperCase();
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map