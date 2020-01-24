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
            // this.clearObstacles();
        }, 1000 / this.fps);



    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.canvas.width, this.canvas.height, this.keys);
        this.obstables = [];
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.obstacles.forEach(obstacle => obstacle.draw());
    },

    moveAll() {
        this.background.move();
        this.player.move();
        this.obstacle.move();
    },

    generateObstacles() {
        if (this.framesCounter % 70 == 0) {
            console.log("prueba")
            this.obstacles.push(new obstacle(this.ctx))

        }
    },

    // clearObstacles() {
    //     this.obstacles = this.obstacles.filter(ObstacleT => ObstacleT.posX >= 0);
    // },

}