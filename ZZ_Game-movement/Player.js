Player = function(board,x,y,movement){
    this.board = board;
    this.x = x;
    this.y = y;
    this.movement = movement;
    this.energyLeft = movement;
    this.keys={
        38:up,
        40:down,
        37: left,
        39: right,
        27: refresh
    }
    this.rangeGrid = new RangeGrid(7);
}

Player.prototype.moveTo = function(square){
    if (this.energyLeft>= square.movementCost){
        this.energyLeft = this.energyLeft - square.movementCost;
        this.x = square.col;
        this.y = square.row;
        console.log("energyleft "+ this.energyLeft)
        return true;
    }
    console.log("in move to return false");
    return false;
};
Player.prototype.handleKey= function(keyCode){
    console.log("in handle"+ keyCode);
    return this.keys[keyCode](this);
}
function up(player){
    if (player.y > 0){
        return player.moveTo(player.board.board[player.y-1][player.x]);
    }
    return false;
}
function down(player){
    if (player.y < player.board.numRows-1){
        return player.moveTo(player.board.board[(player.y+1)][player.x]);
    }
    return false;
}
function left(player){
    if (player.x > 0){
        return player.moveTo(player.board.board[player.y][player.x-1]);
    }
    return false;
}
function right(player){
    if (player.x  < player.board.numCols-1){
        return player.moveTo(player.board.board[player.y][player.x+1]);
    }
    return false;
}
function refresh(player){
    player.energyLeft = player.movement;
    return true;
}