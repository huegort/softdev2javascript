var wolf = {
    x:0,
    y:0,
    w:100,
    h:100,
    ready:false,
    imageUrl: "images/wolfsheet1.png",
    currentImage: new Image(),
    draw: function(ctx){
        var currentImage = this.currentImage;
        console.log("sheet dimensions "+currentImage.width+":"+currentImage.height);

        ctx.strokeStyle="RED";
        ctx.drawImage(currentImage,this.x,this.y);
        for(var ix = 320; ix <currentImage.width; ix= ix+64){
            ctx.strokeStyle="RED";
            ctx.beginPath();
            ctx.moveTo(ix,0);
            ctx.lineTo(ix,currentImage.height);
            ctx.stroke();

        }
        for(var iy = 0; iy <currentImage.height; iy= iy+32){
            ctx.strokeStyle="RED";

            ctx.beginPath();
            ctx.moveTo(0,iy);
            ctx.lineTo(currentImage.width,iy);
            ctx.stroke();

        }

    },
    tick: function(canvas){
        console.log("wolf tick does nothing");
    },
    initialise: function(){
        this.currentImage.src = this.imageUrl;
        this.currentImage.onload = function() {
            this.ready = true;
        };
    }
}
wolf.initialise();