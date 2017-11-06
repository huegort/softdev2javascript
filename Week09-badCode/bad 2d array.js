var images = [];

for (var row =0; row<10;row++){
    for (var col=0; col <10; col++){
        var rowArray;
        rowArray[col] = "sampleImage "+row+col;
        images[row] =rowArray;

    }
}
// or
for (var row =0; row<10;row++){
    for (var col=0; col <10; col++){
        images[row];
        images[row][col] = "sampleImage "+row+col;

    }
}