const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

class ObstacleBot {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.image = new Image()
        this.image.src = "./images/obstacle_bottom.png"

        this.width = 69
        this.height = 397

        this.posX = 700
        this.posY = randomInt(300, 500)
        this.velX = 5
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }
    move() {
        this.posX -= this.velX
    }
}