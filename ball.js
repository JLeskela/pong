//ball.js
import Rectangle from './rectangle.js';
import cfg from './config.js';

export default class Ball extends Rectangle {
	constructor() {
		super(cfg.BALL_POS_X, cfg.BALL_POS_Y, cfg.BALL_SIZE, cfg.BALL_SIZE, cfg.BALL_COLOR);
		this.velx = 0;
		this.vely = 0;
	}
	start() {
		this.velx = (Math.floor(Math.random()*2)) == 1 ? cfg.BALL_START_VEL_X : -cfg.BALL_START_VEL_X;
		this.vely = (Math.random() * 3 - 1);
	}
	
	move() {
		this.x += this.velx;
		this.y += this.vely;
	}
	bounce(pong) {
		if (this.top < 0 || this.bottom > cfg.canvas.height) {
			(new Audio(pong.wallSound)).play();
			this.vely = -this.vely;
		}
	}
}