$(document).ready(function(){
    $('#outer-modal').hide();
    $('#outer-modal').click(function(){
       $('#outer-modal').hide();
    });

    let spymaster = new gameGrid();
    $('.error-message').text('Error test');
    $('button').click(function(e){
        e.preventDefault();

        let size;
        let sizeInput = $('input[name=size]').val();
        sizeInput = parseFloat(sizeInput);
        if (sizeInput > 50 || sizeInput < 4){
            $('#error-message').text('Number must be between 4 and 50.');
            $('#outer-modal').show();
            $('input[name=size]').val("5");
        } else {
            size = sizeInput;
        }

        let assassins = $('input[name=assassins]').val();
        assassins = parseFloat(assassins);

        let blue = $('input[name=blue]').val();
        blue = parseFloat(blue);

        let red = $('input[name=red]').val();
        red = parseFloat(red);


        spymaster.startGame(size, assassins, blue, red);

    });
});

class gameGrid{
    constructor(boardSize, howManyAssassins, howManyBlue, howManyRed){
        this.gameboard;
        this.startGame(boardSize, howManyAssassins, howManyBlue, howManyRed);
    }
    
    startGame(dimensions=5, assassins=1, blue=6, red=7){
        this.clearBoard();
        this.makeBoard(dimensions);
        this.chooseAssassinSquares(assassins);
        this.chooseBlueSquares(blue);
        this.chooseRedSquares(red);
    }

    /*
    Will set default size to 5x5, but can be set to bigger or smaller
     */

    clearBoard(){
        $('#gameboard').empty();
    }
    
    makeBoard(size){
        this.gameboard = new Array(size);

        for (let rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            this.gameboard[rowIndex] = new Array(size);
        } //makes columns

        for (let rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            for (let columnIndex = 0; columnIndex < this.gameboard[0].length; columnIndex++) {
                this.gameboard[rowIndex][columnIndex] = $('<div>', {
                    'class': 'tile empty',
                    css: {
                        height: `${100/size}%`,
                        width: `${100/size}%`
                    }
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



