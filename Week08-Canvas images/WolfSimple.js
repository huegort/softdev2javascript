var wolf = {
    x:50,
    y:50,
    w:100,
    h:100,
    ready:false,
    imageUrl: "images/howl.png",
    baseImage: new Image(),
    draw: function(ctx){
        var baseImage = this.baseImage;

       ctx.drawImage(baseImage,this.x,this.y);
       //ctx.drawImage(this.currentImage,this.x,this.y, this.w, this.h);
        // or you can draw part of the source image (image, sx,sy,sw,sh,dx,dy,dw,dh)
       //ctx.drawIm age(currentImage,0,0,currentImage.width,currentImage.height,this.x,this.y, this.w, this.h);
    },
    tick: function(canvas){
        console.log("wolf tick does nothing");
    },
    initialise: function(){
        this.baseImage.onload = function() {
            this.ready = true;
        };
        this.baseImage.src = this.imageUrl;

    }
}
wolf.initialise();