//player.js
import Rectangle from './rectangle.js';
import cfg from './config.js';

export default class Player extends Rectangle {
	constructor(x, vely, ctrls, upCode, downCode) {
		super(x, cfg.PLAYER_START_POS_Y, cfg.PLAYER_WIDTH, cfg.PLAYER_HEIGHT, cfg.PLAYER_COLOR);
		this.vely = vely;
		this.score = 0;
		this.ctrls = ctrls;
		this.upCode = upCode;
		this.downCode = downCode;
		this.keys = { up: false, down: false };
	}
}
	
	
