//player.js
class Player extends Rectangle {
	constructor(x, vely, ctrls, upCode, downCode) {
		super(x, pStartPosY, pWidth, pHeight, pColor);
		this.vely = vely;
		this.score = 0;
		this.ctrls = ctrls;
		this.upCode = upCode;
		this.downCode = downCode;
		this.keys = { up: false, down: false };
	}
}
	
	
