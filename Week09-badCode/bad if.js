var imageCount = 0;

function tick(){
    imageCount++;
    if (imageCount = 5){
        imageCount = 0;
    }
}

function testTick() {
    for (var i = 0; i < 20; i++) {
        tick();
        console.log(imageCount);
    }
    ;
}
testTick();

