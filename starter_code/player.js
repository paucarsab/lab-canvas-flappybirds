class Player {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;
        this.keys = keys;

        this.image = new Image();
        this.image.src = "./images/flappy.png";

        this.width = 40;
        this.height = 40;

        this.posX = 250;
        this.posY = this.gameHeight / 2;
        this.posY0 = this.posY;
        this.setListeners();
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
    animate() { }
    setListeners() {
        document.onkeydown = e => {
            if (e.keyCode === 65) {
                this.posY -= 70;
                // this.velY -= 8;
            }
        }
    };
    move() {
        this.posY += 5;

    }

}