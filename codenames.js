$(document).ready(function(){
    const SPYMASTER = new gameGrid();
});

class gameGrid{
    constructor(boardSize=5, howManyAssassins=1, howManyBlue=6, howManyRed=7){
        this.gameboard = [];
        this.startGame(boardSize, howManyAssassins, howManyBlue, howManyRed);
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
    
    makeBoard(size){
        this.gameboard = new Array(size);

        for (let rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            this.gameboard[rowIndex] = new Array(size);
        } //makes columns

        for (let rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            for (let columnIndex = 0; columnIndex < this.gameboard[0].length; columnIndex++) {
                this.gameboard[rowIndex][columnIndex] = $('<div>', {
                    'class': 'tile empty'
                });

                $('#gameboard').append(this.gameboard[rowIndex][columnIndex]);
            }
        }  //makes all tiles
    }

    chooseAssassinSquares(numberOfAssassins){
        for (let i=0; i<numberOfAssassins; i++){
            let x = Math.floor(Math.random() * this.gameboard.length);
            let y = Math.floor(Math.random() * this.gameboard.length);
            if (this.gameboard[x][y].hasClass('empty')){
                this.gameboard[x][y].removeClass('empty').addClass('assassin');
            } else {
                i--;
            }
        }
    }

    chooseBlueSquares(numberOfBlueAgents){
        for (let i=0; i<numberOfBlueAgents; i++){
            let x = Math.floor(Math.random() * this.gameboard.length);
            let y = Math.floor(Math.random() * this.gameboard.length);
            if (this.gameboard[x][y].hasClass('empty')){
                this.gameboard[x][y].removeClass('empty').addClass('blue');
            } else {
                i--;
            }
        }
    }

    chooseRedSquares(numberOfRedAgents){
        for (let i=0; i<numberOfRedAgents; i++){
            let x = Math.floor(Math.random() * this.gameboard.length);
            let y = Math.floor(Math.random() * this.gameboard.length);
            if (this.gameboard[x][y].hasClass('empty')){
                this.gameboard[x][y].removeClass('empty').addClass('red');
            } else {
                i--;
            }
        }
    }
}



