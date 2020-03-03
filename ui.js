//ui.js
import cfg from './config.js';

export default class Ui {
	drawScore(players) {
		for (const p of players) {
			this.drawText(cfg.SCORE_TEXT_FONT, cfg.SCORE_TEXT_COLOR, p.score,
			120 + players.indexOf(p)*(cfg.canvas.width  - 260), cfg.SCORE_TEXT_POS_Y);
		}
	}	
	drawText(font, color, text, x, y) {
		cfg.ctx.font = font;
		cfg.ctx.fillStyle = color;
		cfg.ctx.fillText(text, x, y);
	}
	
	startPrompt() {
		this.drawText(cfg.START_PROMPT_FONT, cfg.START_PROMPT_COLOR,
		"PRESS ANY KEY TO START", cfg.START_PROMPT_POS_X, cfg.START_PROMPT_POS_Y);
	}
}