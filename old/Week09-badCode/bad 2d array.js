var images = [];

for (var row =0; row<10;row++){
    var rowArray = [];
    images[row] =rowArray;
    for (var col=0; col <10; col++){
        rowArray[col] = "sampleImage "+row+col;
    }
}
// or
for (var row =0; row<10;row++){
    images[row]= [];
    for (var col=0; col <10; col++){
        images[row][col] = "sampleImage "+row+col;

    }
}