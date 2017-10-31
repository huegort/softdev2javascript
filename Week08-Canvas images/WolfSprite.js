var wolf = {
    x:0,
    y:0,
    w:100,
    h:100,
    ready:false,
    imageUrl: "images/wolfsheet1.png",
    baseImage: new Image(),
    draw: function(ctx){
        var baseImage = this.baseImage;
        ctx.drawImage(baseImage,this.x,this.y);
        //ctx.drawImage(currentImage,0,0,currentImage.width,currentImage.height,this.x,this.y, this.w, this.h);
        //drawguidelines
    },
    tick: function(canvas){
        console.log("wolf tick does nothing");
    },
    initialise: function(){
        this.baseImage.src = this.imageUrl;
        this.baseImage.onload = function() {
            this.ready = true;
        };
    }
}
wolf.initialise();