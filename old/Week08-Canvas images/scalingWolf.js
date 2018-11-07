var wolf = {
    x:20,
    y:20,
    w:200,
    h:100,
    currentSprite :{col:1,row:4},
    ready:false,
    frameCount:0,
    speedFactor:5,
    sprites : [],
    imageUrl: "images/wolfsheet1.png",
    baseImage: new Image(),
    draw: function(ctx){
        //console.log("sprite "+this.currentSprite.row+","+this.currentSprite.col);
        //console.log("draw "+this.sprites[this.currentSprite.row][this.currentSprite.col]);
        ctx.clearRect(0,0,400,400);
        if (this.ready) {
            var scale = 3;
            var row = this.currentSprite.row;
            var col= this.currentSprite.col;
            var sprite = this.sprites[row][col];
            ctx.drawImage(this.baseImage,
                sprite.sx,sprite.sy,
                sprite.sw,sprite.sh,
                this.x, this.y,
                sprite.sw*scale,sprite.sh*scale);
        }
    },
    tick: function(canvas){
        //console.log (this.frameCount)
        if (this.frameCount-- <= 0){
            //console.log( "col:"+this.currentSprite.col);
            this.frameCount = this.speedFactor;
            this.currentSprite.col++;
            if (this.currentSprite.col == 5){this.currentSprite.col=0;}

        }

    },
    initialise: function(){

        this.baseImage.onload = function() {

            var spritew= 64;
            var spriteh = 32;
            for (var row=0;row<12;row++){
                wolf.sprites[row] = []; // initialies the array in the array
                for(var col=0;col<5;col++){
                    var  spriteX= 320+col*spritew;
                    var spriteY =row*spriteh;

                    var sprite = {sx:spriteX,sy:spriteY,sw:spritew, sh:spriteh}
                    wolf.sprites[row][col] = sprite
                }
            }
            wolf.ready = true;


        };
        console.log("test0");
        this.baseImage.src = this.imageUrl;

    }
}
wolf.initialise();