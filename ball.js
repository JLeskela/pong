//ball.js
class Ball extends Rectangle {
	constructor() {
		super(ballPosX, ballPosY, sideLength, sideLength, ballColor);
		this.velx = 0;
		this.vely = 0;
	}
	start() {
		this.velx = (Math.floor(Math.random()*2)) == 1 ? ballVelX : -ballVelX;
		this.vely = (Math.random() * 3 - 1);
	}
	
	move() {
		this.x += this.velx;
		this.y += this.vely;
	}
	bounce() {
		if (this.top < 0 || this.bottom > canvas.height) {
			(new Audio(pong.wallSound)).play();
			this.vely = -this.vely;
		}
	}
}