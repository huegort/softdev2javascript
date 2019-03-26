var spalt =.5;

RangeGrid = function(range){
    this.range = range;
    this.grid = initGrid(range);
    console.log(JSON.stringify(this.grid));

};
function initGrid(range){
    var grid = new Array((range*2)+1);
    var dim = (range*2)+1;

    var difY= -range;
    for (var row = 0; row<dim;row++){
        grid[row] = new Array((range*2)+1);
        var difX= -range;
        for(var col = 0; col <dim; col++){
            var dist = Math.sqrt((difX*difX) + (difY*difY));
            var angle = Math.atan2(difY, difX); // this is in radians
            grid[row][col]= {x:difX, y:difY, dist : dist, angle : angle};

            difX++;
        }
        difY++;
    }
    return grid;
}