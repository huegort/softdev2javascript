Game = function(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.actors = [];


};
Game.prototype={
    drawAll:function(game){
        console.log("in drawAll");
        game.ctx.clearRect(0,0,game.canvas.width, game.canvas.height);
        for (var i=0;i<game.actors.length; i++){
            this.actors[i].draw(game);
        }
    },
    tickAll:function(game){
        for (var i=0;i< game.actors.length; i++){
            game.actors[i].tick(game);
        }
        game.drawAll(game);

    },
    initialise: function(){
        // init all actors
        var tickFun= this.tickAll;
        var game = this; 
        for (var i= 0; i<10;i++){
            new Actor(game,30,30*i);

        }

        //console.log("in init "+JSON.stringify(this))
        setInterval(function(){tickFun(game)},1000/60);
    }
};