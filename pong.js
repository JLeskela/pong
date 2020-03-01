//pong.js
class Pong {
	constructor() {
		this.ui = new Ui();
		this.ball = new Ball();
		this.p1 = new Player(p1PosX, 0, "human", p1UpCode, p1DownCode);
		this.p2 = new Player(p2PosX, aiSpeed, "ai", p2UpCode, p2DownCode);
		this.players = [this.p1, this.p2];
		this.isStarted = false;
		this.hitSound = "hit_sound.mp3";
		this.wallSound = "hit_sound.mp3";
	}
	/************************UPDATE************************/
	update() {
		if (!pong.isStarted) {
			pong.ui.startPrompt();
			return;
		}
		pong.players.forEach(p => pong.controls(p));
		pong.bounds();
		pong.checkScore();
		pong.ball.move();
		pong.p1.y += pong.p1.vely;
		pong.p2.ctrls == "ai" ? pong.enemyAI() : pong.p2.y += pong.p2.vely;
		pong.ball.bounce();
		pong.players.forEach(p => pong.collide(p, pong.ball));
		pong.draw();	
		requestAnimationFrame(pong.update);
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
			this.p2.y += aiSpeed / 2;
		if (this.p2.bottom - this.p2.h / 3 > this.ball.top + this.ball.h / 2)
			this.p2.y -= aiSpeed / 2;
		//if enemy is far from ball, move faster 
		if (this.p2.top + this.p2.h / 4 < this.ball.top + this.ball.h / 2)
			this.p2.y += aiSpeed;
		if (this.p2.bottom - this.p2.h / 4 > this.ball.top + this.ball.h / 2)
			this.p2.y -= aiSpeed;
	}
	/*************************RESET*************************/
	resetPos() {
		this.isStarted = false;
		this.ball.x = ballPosX;
		this.ball.y = ballPosY;
		this.ball.velx = pong.ball.vely = 0;
		this.players.forEach(p => {
			p.y = pStartPosY;
			p.vely = 0;
		});
	}
	/*************************CHECKSCORE********************/
	checkScore() {
		if (this.ball.left < 0 || this.ball.right > canvas.width) {
			let index = (this.ball.velx < 0) ? 1 : 0;	//check direction of ball to determine who gets score
			this.players[index].score++;
			this.resetPos();
		}
	}
	/*************************RESETGAME********************/
	resetGame() {
		this.players.forEach(p => p.score = 0);
		ctx.clearRect(0,0, canvas.width, canvas.height);
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
			ball.velx = -bVelXMultiplier * ball.velx;
			ball.vely += ball.velx * 0.5 *(Math.random() - .5); //adds randomness to ball' vertical movement when colliding
		}
	}
	/***************************BOUNDS***********************/
	bounds() {
		this.players.forEach(p => {
			if (p.ctrls == "human") {
				if (p.bottom < pHeight / 2 || p.bottom > canvas.height + pHeight / 2) {
					p.vely = -p.vely;
				}
			}
		});
	}
	/*************************CONTROLS***********************/
	controls(p) {
		if (p.keys.up && p.vely >= -maxVelY) {
			p.vely -= pSpeed;
			p.keys.up = false;
		}
		if (p.keys.down && p.vely <= maxVelY) {
			p.vely += pSpeed;
			p.keys.down = false;
		}
	}
	/************************DRAW************************/
	draw() {
		ctx.clearRect(0,0, canvas.width, canvas.height);
		this.players.forEach(p => p.draw(pColor));
		this.ball.draw(ballColor);
		this.ui.drawScore(this.players);
		if (!this.isStarted)
			this.ui.startPrompt();
	}
}
//Initialization
let pong = new Pong();
pong.draw();
pong.ui.startPrompt();
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
		//select number of players, changing mode will reset game
		//ai: 1 (default mode)
		if (event.keyCode === 49) {	
			pong.p2.ctrls = "ai";
			pong.p2.vely = aiSpeed;
			pong.resetGame();
		}
		//human: 2
		if (event.keyCode === 50) {	
			pong.p2.ctrls = "human";
			pong.p2.vely = 0;
			pong.resetGame();
		}
		if (pong.p2.ctrls == "ai")
			pong.p2.vely = aiSpeed;
		pong.start();
	}
});