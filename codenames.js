$(document).ready(startGame);

var gameboard;
var assassin;
var blue;
var red;

function startGame(){
    makeBoard();
    chooseAssassin();
}

function makeBoard() {
    gameboard = new Array(5);

    for (var rowIndex = 0; rowIndex < gameboard.length; rowIndex++) {
        gameboard[rowIndex] = new Array(5);
    } //makes columns

    for (rowIndex = 0; rowIndex < gameboard.length; rowIndex++) {
        for (var columnIndex = 0; columnIndex < gameboard[0].length; columnIndex++) {
            gameboard[rowIndex][columnIndex] = $('<div>', {
                'class': 'tile empty'
            });

            $('#gameboard').append(gameboard[rowIndex][columnIndex]);
        }
    }  //make all tiles
}

function chooseAssassin(){
    var x = Math.floor(Math.random() * gameboard.length);
    var y = Math.floor(Math.random() * gameboard.length);
    assassin = gameboard[x][y];

    assassin.removeClass('empty');
    assassin.addClass('assassin');
    chooseBlue();


}

function chooseBlue(){

    for (var i=0; i<6; i++){
        var x = Math.floor(Math.random() * gameboard.length);
        var y = Math.floor(Math.random() * gameboard.length);
        if (gameboard[x][y].hasClass('empty')){
            gameboard[x][y].removeClass('empty');
            gameboard[x][y].addClass('blue');
        } else {
            i--;
        }
    }
    chooseRed();

}

function chooseRed(){
    for (var i=0; i<7; i++){
        var x = Math.floor(Math.random() * gameboard.length);
        var y = Math.floor(Math.random() * gameboard.length);
        if (gameboard[x][y].hasClass('empty')){
            gameboard[x][y].removeClass('empty');
            gameboard[x][y].addClass('red');
        } else {
            i--;
        }
    }
}