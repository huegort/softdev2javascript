Actor = function(game,x, y){
    this.game = game;
    this.x =x;
    this.y = y;
    game.actors.push(this);
    this.initialise();
}


Actor.prototype.draw = function(){
    this.game.ctx.fillRect(this.x, this.y,30,30);
}
Actor.prototype.tick= function(){
    this.x++;
}

Actor.prototype.initialise= function(){
    console.log("init actor");
}
