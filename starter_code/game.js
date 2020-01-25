const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    obstacles: [],
    framesCounter: 0,
    fps: 60,

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = 600;
        this.height = 630;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.start();
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.framesCounter++;
            if (this.framesCounter > 1000) this.framesCounter = 0;
            this.drawAll();
            this.moveAll();
            this.generateObstacles();
            this.clearObstacles();
        }, 1000 / this.fps);
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.canvas.width, this.canvas.height, this.keys);
        this.obstacles = [];
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.obstacles.forEach(obs => obs.draw())
    },

    moveAll() {
        this.background.move()
        this.obstacles.forEach(obs => obs.move())
        this.player.move()
    },

    generateObstacles() {
        if (this.framesCounter % 90 == 0) {
            this.obstacles.push(new ObstacleBot(this.ctx, this.w, this.h));
            console.log(this.obstacles);
        }
    },

    clearObstacles() {
        this.obstacles = this.obstacles.filter(obs => obs.posX >= -100);
    },

}