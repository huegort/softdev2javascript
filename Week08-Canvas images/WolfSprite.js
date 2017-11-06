var wolf = {
    x:0,
    y:0,
    w:100,
    h:100,
    currentSprite :{col:1,row:4},
    ready:false,
    frameCount:0,
    speedFactor:5,
    sprites : [[],[],[],[],[],[],[],[],[],[],[],[]],
    imageUrl: "images/wolfsheet1.png",
    baseImage: new Image(),
    draw: function(ctx){
        var baseImage = this.baseImage;
        //console.log("sprite "+this.currentSprite.row+","+this.currentSprite.col);
        //console.log("draw "+this.sprites[this.currentSprite.row][this.currentSprite.col]);
        if (this.ready) {
            ctx.putImageData(this.sprites[this.currentSprite.row][this.currentSprite.col], this.x, this.y);
        }
    },
    tick: function(canvas){
        //console.log (this.frameCount)
        if (this.frameCount-- <= 0){
            console.log( "col:"+this.currentSprite.col);
            this.frameCount = this.speedFactor;
            this.currentSprite.col++;
            if (this.currentSprite.col == 5){this.currentSprite.col=0;}

        }

    },
    initialise: function(){

        this.baseImage.onload = function() {
            var tempCanvas = document.createElement('canvas');
            tempCanvas.width = 640;
            tempCanvas.height = 384;
            var tempCtx = tempCanvas.getContext("2d");
            console.log(this);
            tempCtx.drawImage(this,0,0);
            wolf.ready = true;

            var spritew= 64;
            var spriteh = 32;
            for (var row=0;row<12;row++){
                for(var col=0;col<5;col++){
                    //console.log("test2 "+col+":"+row);
                    //console.log(tempCtx.getImageData(col*spritew, row*spriteh, spritew, spriteh));
                    wolf.sprites[row][col] = tempCtx.getImageData(320+col*spritew, row*spriteh, spritew, spriteh);
                }
            }

        };
        console.log("test0");
        this.baseImage.src = this.imageUrl;

    }
}
wolf.initialise();