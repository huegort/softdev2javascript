var boardInitGrid= [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,1,1,1,9,2,3,3,3,3,3,1,1,1,1,1,1],
    [1,1,1,1,1,1,2,2,1,1,9,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,2,1,9,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]

Board = function(){
    this.numRows = boardInitGrid.length;
    this.numCols = boardInitGrid[0].length;
    this.board = [];
    this.initBoard();
}
Board.prototype.initBoard = function(){
    console.log("about to init");
    var numRows = this.numRows;
    var numCols = this.numCols;
    for (var row = 0 ; row <numRows;row++){
        this.board[row] = new Array(numCols);
        for (var col = 0; col<numCols; col++){
            this.board[row][col] = new Square(boardInitGrid[row][col],row,col);
        }
    }
}
Board.prototype.debugPrint = function(player){
    var numRows = this.numRows;
    var numCols = this.numCols;
    for (var row = 0 ; row <numRows;row++){
        var rowString =""
        for (var col = 0; col<numCols; col++){
            var currentSquare = this.board[row][col];
            if (row == player.y && col == player.x){
                rowString+='O';
            }else if (currentSquare.energyAtHere !==0){
                rowString += this.board[row][col].energyAtHere
            }else{
                rowString += this.board[row][col].display
            }

        }
        console.log(rowString);
    }
};
Board.prototype.clearMovement = function(){
    var numRows = this.numRows;
    var numCols = this.numCols;
    for (var row = 0 ; row <numRows;row++){
        for (var col = 0; col<numCols; col++){
            this.board[row][col].energyAtHere =0
        }
    }
};

Board.prototype.calculateMovements = function(player){
    var squaresToPropagate = [];
    var moveToSquare;
    var board = this.board;
    board[player.y][player.x].energyAtHere = player.movement;
    squaresToPropagate.push(board[player.y][player.x]);
    while (squaresToPropagate.length >0){
        currentSquare= squaresToPropagate.shift(); // takes first element from array

        //checkUp
        if (currentSquare.row > 0){
            moveToSquare = board[currentSquare.row-1][currentSquare.col];
            updateSquaresToPropagate(squaresToPropagate,moveToSquare,currentSquare);
        }
        //checkDown
        if (currentSquare.row < this.numRows-1){
            moveToSquare = board[currentSquare.row+1][currentSquare.col];
            updateSquaresToPropagate(squaresToPropagate,moveToSquare,currentSquare);
        }
        //checkLeft
        if (currentSquare.col >0){
            moveToSquare = board[currentSquare.row][currentSquare.col-1];
            updateSquaresToPropagate(squaresToPropagate,moveToSquare,currentSquare);
        }
        //checkRight
        if (currentSquare.col < this.numCols-1){
            moveToSquare = board[currentSquare.row][currentSquare.col+1];
            updateSquaresToPropagate(squaresToPropagate,moveToSquare,currentSquare);
        }

    }
};
function updateSquaresToPropagate (squaresToPropagate, moveToSquare, currentSquare){
    if (moveToSquare.canMoveTo(currentSquare.energyAtHere)){
        var energyLeft = currentSquare.energyAtHere - moveToSquare.movementCost;
        if (energyLeft > moveToSquare.energyAtHere){
            moveToSquare.energyAtHere = energyLeft;
            squaresToPropagate.push(moveToSquare); // we should check if it was already there
        }
    }
}