//pong.js
import cfg from './config.js';
import Ui from './ui.js';
import Ball from './ball.js';
import Player from './player.js';
import Controlpanel from './controlpanel.js';

export default class Pong {
	constructor() {
		this.ui = new Ui();
		this.ball = new Ball();
		this.p1 = new Player(cfg.PLAYER_1_POS_X, 0, "human",
							 cfg.PLAYER_1_UP_KEY_CODE, cfg.PLAYER_1_DOWN_KEY_CODE);
		this.p2 = new Player(cfg.PLAYER_2_POS_X, cfg.AI_PLAYER_SPEED, "ai",
							 cfg.PLAYER_2_UP_KEY_CODE, cfg.PLAYER_2_DOWN_KEY_CODE);
		this.players = [this.p1, this.p2];
		this.isStarted = false;
		this.hitSound = "hit_sound.mp3";
		this.wallSound = "hit_sound.mp3";
	}
	/********************GAME LOOP************************/
	update = () => {
		//display start prompt if not started
		if (!this.isStarted) {
			this.ui.startPrompt();
			return;
		}
		//player logic
		this.players.forEach(p => {
			p.vely *= cfg.FRICTION_MULTIPLIER;
			this.collide(p, this.ball)
			this.controls(p);
		});
		this.p1.y += this.p1.vely;
		this.p2.ctrls == "ai" ? this.enemyAI() : this.p2.y += this.p2.vely;
		//ball logic
		this.ball.move();
		this.ball.bounce(this);
		
		this.bounds();
		this.incrementScore();
		this.draw();
				
		requestAnimationFrame(this.update);
	}
	/*************************START***************************/
	start() {
		if (this.isStarted) return;
		this.isStarted = true;
		this.ball.start();
		this.update();
	}
	/*************************ENEMY AI*************************/
	enemyAI() {
		//if enemy is close to ball, move slower
		if (this.p2.top + this.p2.h / 3 < this.ball.top + this.ball.h / 2)
			this.p2.y += cfg.AI_PLAYER_SPEED / 2;
		if (this.p2.bottom - this.p2.h / 3 > this.ball.top + this.ball.h / 2)
			this.p2.y -= cfg.AI_PLAYER_SPEED / 2;
		//if enemy is far from ball, move faster 
		if (this.p2.top + this.p2.h / 4 < this.ball.top + this.ball.h / 2)
			this.p2.y += cfg.AI_PLAYER_SPEED;
		if (this.p2.bottom - this.p2.h / 4 > this.ball.top + this.ball.h / 2)
			this.p2.y -= cfg.AI_PLAYER_SPEED;
	}
	/*************************RESET*************************/
	resetPos() {
		this.isStarted = false;
		this.ball.x = cfg.BALL_POS_X;
		this.ball.y = cfg.BALL_POS_Y;
		this.ball.velx = pong.ball.vely = 0;
		this.players.forEach(p => {
			p.y = cfg.PLAYER_START_POS_Y;
			p.vely = 0;
		});
	}
	/*************************INCREMENT SCORE********************/
	incrementScore() {
		if (this.ball.left < 0 || this.ball.right > cfg.canvas.width) {
			//check direction of ball to determine who gets score
			let index = (this.ball.velx < 0) ? 1 : 0;	
			this.players[index].score++;
			this.resetPos();
		}
	}
	/*************************RESETGAME********************/
	resetGame() {
		this.players.forEach(p => p.score = 0);
		cfg.ctx.clearRect(0,0, cfg.canvas.width, cfg.canvas.height);
		this.resetPos();
		this.ui.drawScore(this.players);
		this.draw();
	}
	/**************************COLLIDE***************************/
	collide(p, ball) {
		if (p.left < ball.right && p.right > ball.left && 
			p.top < ball.bottom && p.bottom > ball.top)
		{
			(new Audio(this.hitSound)).play();
			ball.velx = -cfg.BALL_VEL_X_MULTIPLIER * ball.velx;
			//adds randomness to ball' vertical movement when colliding
			ball.vely += ball.velx * 0.5 *(Math.random() - .5); 
		}
	}
	/***************************BOUNDS***********************/
	bounds() {
		this.players.forEach(p => {
			if (p.ctrls == "human") {
				if (p.bottom < cfg.PLAYER_HEIGHT / 2 || 
					p.bottom > cfg.canvas.height + cfg.PLAYER_HEIGHT / 2)
				{
					p.vely = -p.vely;
				}
			}
		});
	}
	/*************************CONTROLS***********************/
	controls(p) {
		if (p.keys.up && p.vely >= -cfg.MAX_PLAYER_VEL && p.top > -cfg.PLAYER_HEIGHT / 2) {
			p.vely -= cfg.HUMAN_PLAYER_SPEED;
			p.keys.up = false;
		}
		if (p.keys.down && p.vely <= cfg.MAX_PLAYER_VEL && 
			p.top < cfg.canvas.height - cfg.PLAYER_HEIGHT)
		{
			p.vely += cfg.HUMAN_PLAYER_SPEED;
			p.keys.down = false;
		}
	}
	/************************DRAW************************/
	draw() {
		cfg.ctx.clearRect(0,0, cfg.canvas.width, cfg.canvas.height);
		this.players.forEach(p => p.draw(cfg.PLAYER_COLOR));
		this.ball.draw(cfg.BALL_COLOR);
		this.ui.drawScore(this.players);
		if (!this.isStarted)
			this.ui.startPrompt();
	}
}
//Initialization

let pong = new Pong();
pong.draw();
pong.ui.startPrompt();
Controlpanel.addOnChangeListeners(pong);
pong.players.forEach(p => {
	window.addEventListener("keydown", (event) => {
		let key_state = (event.type == "keydown") ? true : false;
		switch(event.keyCode) {
			case p.upCode:
				p.keys.up = key_state;
			break;
			case p.downCode:
				p.keys.down = key_state;
			break;
		}
	});
});

window.addEventListener("keydown", (event) => {
	if (!pong.isStarted) {
		//select game mode, changing mode will reset game
		//ai opponent: 1 (default mode)
		if (event.keyCode === 49) {	
			pong.p2.ctrls = "ai";
			pong.p2.vely = cfg.AI_PLAYER_SPEED;
			pong.resetGame();
		}
		//human opponent: 2
		if (event.keyCode === 50) {	
			pong.p2.ctrls = "human";
			pong.p2.vely = 0;
			pong.resetGame();
		}
		if (pong.p2.ctrls == "ai")
			pong.p2.vely = cfg.AI_PLAYER_SPEED;
		pong.start();
	}
});