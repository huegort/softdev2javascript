var initSquareTypes= {
    1:['Grass',1,'_'],
    2:['Bush',2,':'],
    3:['Trees',4,'|'],
    4:['marsh',7,'~'],
    9:['Cliff',99,'X'],
}

Square = function (type, row, col) {
    this.row = row;
    this.col = col;
    this.description = initSquareTypes[type][0];
    this.movementCost = initSquareTypes[type][1];
    this.display = initSquareTypes[type][2];

    // for movement calculation
    this.energyAtHere = 0;

}
Square.prototype.canMoveTo = function(movesLeft){
    return (movesLeft>= this.movementCost);
}