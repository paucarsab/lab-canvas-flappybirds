class Obstacle{
    constructor(ctx) {
        this.ctx = ctx
        this.width = 138
        this.height = 793
        this.image = new Image()
        this.image.src = "./images/obstacle_top.png"
        this.posX = canvas.width;
        this.posY = 0;
        this.velX = 10;
    }
    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height
        );
    }
    move() {
        this.posX -= this.velX;
        if (this.posX <= -this.width) { this.posX = 0 }
    }
}