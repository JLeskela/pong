//config.js
/*********DEFINE GLOBAL CONSTANTS AND VARIABLES*********/

class Config {
	constructor() {
		this.canvas = document.getElementById("pong");
		this.ctx = this.canvas.getContext("2d");
		//player
		this.PLAYER_WIDTH = 15;
		this.PLAYER_HEIGHT = 140;
		this.PLAYER_1_POS_X = 40;
		this.PLAYER_2_POS_X = this.canvas.width - this.PLAYER_WIDTH - this.PLAYER_1_POS_X;
		this.PLAYER_1_UP_KEY_CODE = 87;
		this.PLAYER_1_DOWN_KEY_CODE = 83;
		this.PLAYER_2_UP_KEY_CODE = 38;
		this.PLAYER_2_DOWN_KEY_CODE = 40;
		this.PLAYER_START_POS_Y = this.canvas.height / 2 - this.PLAYER_HEIGHT / 2;
		this.PLAYER_COLOR = "#8a0833";
		this.AI_PLAYER_SPEED = 3.2;
		this.HUMAN_PLAYER_SPEED = 3.5;
		this.MAX_PLAYER_VEL = 7.5;
		this.FRICTION_MULTIPLIER = 0.99;

		//ball
		this.BALL_SIZE = 14;
		this.BALL_START_VEL_X = 3;
		this.BALL_POS_X = this.canvas.width / 2 - this.BALL_SIZE / 2;
		this.BALL_POS_Y = this.canvas.height / 2 - this.BALL_SIZE / 2;
		this.BALL_COLOR = "#2666a3"
		this.BALL_VEL_X_MULTIPLIER = 1.05;

		//UI
		this.SCORE_TEXT_COLOR = "#7c66c4";
		this.SCORE_TEXT_FONT = "30px Impact";
		this.SCORE_TEXT_POS_Y = 50;
		this.START_PROMPT_COLOR = "#15bf9a";
		this.START_PROMPT_FONT = "40px Jokerman";
		this.START_PROMPT_POS_X = this.canvas.width / 5;
		this.START_PROMPT_POS_Y = this.canvas.height / 3;
		}
	}
	let cfg = new Config();
	export default cfg;