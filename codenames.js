$(document).ready(newGame);

class gameGrid{
    constructor(){
        this.gameboard = [];
    }
    
    startGame(boardSize, howManyAssassins, howManyBlue, howManyRed){
        this.makeBoard(boardSize);
        this.chooseAssassinSquares(howManyAssassins);
        this.chooseBlueSquares(howManyBlue);
        this.chooseRedSquares(howManyRed);
    }

    /*
    Will set default size to 5x5, but can be set to bigger or smaller
     */
    
    makeBoard(size=5){
        gameboard = new Array(size);

        for (let rowIndex = 0; rowIndex < gameboard.length; rowIndex++) {
            gameboard[rowIndex] = new Array(size);
        } //makes columns

        for (rowIndex = 0; rowIndex < gameboard.length; rowIndex++) {
            for (let columnIndex = 0; columnIndex < gameboard[0].length; columnIndex++) {
                gameboard[rowIndex][columnIndex] = $('<div>', {
                    'class': 'tile empty'
                });

                $('#gameboard').append(gameboard[rowIndex][columnIndex]);
            }
        }  //makes all tiles
    }

    chooseAssassinSquares(numberOfAssassins=1){
        for (let i=0; i<numberOfAssassins; i++){
            let x = Math.floor(Math.random() * gameboard.length);
            let y = Math.floor(Math.random() * gameboard.length);
            if (gameboard[x][y].hasClass('empty')){
                gameboard[x][y].removeClass('empty').addClass('assassin');
            } else {
                i--;
            }
        }
    }

    chooseBlueSquares(numberOfBlueAgents=6){
        for (let i=0; i<numberOfBlueAgents; i++){
            let x = Math.floor(Math.random() * gameboard.length);
            let y = Math.floor(Math.random() * gameboard.length);
            if (gameboard[x][y].hasClass('empty')){
                gameboard[x][y].removeClass('empty').addClass('blue');
            } else {
                i--;
            }
        }
    }

    chooseRedSquares(numberOfRedAgents=7){
        for (let i=0; i<numberOfRedAgents; i++){
            let x = Math.floor(Math.random() * gameboard.length);
            let y = Math.floor(Math.random() * gameboard.length);
            if (gameboard[x][y].hasClass('empty')){
                gameboard[x][y].removeClass('empty').addClass('red');
            } else {
                i--;
            }
        }
    }
}

const SPYMASTER = new gameGrid();

