//controlpanel.js
import cfg from './config.js';

const selectors = {
	pColorPicker: document.getElementById("pColor"),
	ballColorPicker: document.getElementById("ballColor"),
	canvasColorPicker: document.getElementById("canvasColor"),
	borderColorPicker: document.getElementById("borderColor"),
	scoreTextColorPicker: document.getElementById("scoreTextColor"),
	startTextColorPicker: document.getElementById("startTextColor"),
	hitSoundSelector: document.getElementById("hitSound"),
	borderStyleSelector: document.getElementById("borderStyle"),
	controlPanel: document.getElementById("control-panel")
};

export default class Controlpanel {
	static initialize() {
		selectors.pColorPicker.value = cfg.PLAYER_COLOR;
		selectors.ballColorPicker.value = cfg.BALL_COLOR;
		selectors.canvasColorPicker.value = cfg.canvas.style.backgroundColor = cfg.BACKGROUND_COLOR;
		selectors.borderColorPicker.value = cfg.canvas.style.borderColor = cfg.BORDER_COLOR;
		selectors.scoreTextColorPicker.value = cfg.SCORE_TEXT_COLOR;
		selectors.startTextColorPicker.value = cfg.START_PROMPT_COLOR;
		selectors.borderStyleSelector.value = cfg.canvas.style.borderStyle = cfg.BORDER_STYLE;
		cfg.canvas.style.borderLeft = cfg.canvas.style.borderRight = "none";
		
		cfg.canvas.style.display = selectors.controlPanel.style.display = "inherit";
	}
	
	static addOnChangeListeners(pong) {
		selectors.pColorPicker.addEventListener("change", (e) => {
			cfg.PLAYER_COLOR = selectors.pColorPicker.value;
			pong.draw();
		});
		
		selectors.ballColorPicker.addEventListener("change", (e) => {
			cfg.BALL_COLOR = selectors.ballColorPicker.value;
			pong.draw();
		});
		
		selectors.canvasColorPicker.addEventListener("change", (e) => {
			cfg.canvas.style.backgroundColor = selectors.canvasColorPicker.value;
		});
		
		selectors.borderColorPicker.addEventListener("change", (e) => {
			cfg.canvas.style.borderColor = selectors.borderColorPicker.value;
		});
		
		selectors.scoreTextColorPicker.addEventListener("change", (e) => {
			cfg.SCORE_TEXT_COLOR = selectors.scoreTextColorPicker.value;
			pong.draw();
		});
		selectors.startTextColorPicker.addEventListener("change", (e) => {
			cfg.START_PROMPT_COLOR = selectors.startTextColorPicker.value;
			pong.draw();
		});
		selectors.borderStyleSelector.addEventListener("change", (e) => {
			cfg.canvas.style.borderStyle = selectors.borderStyleSelector.value;
			cfg.canvas.style.borderLeft = cfg.canvas.style.borderRight = "none";
		});
		selectors.hitSoundSelector.addEventListener("change", (e) => {
			pong.hitSound = pong.wallSound = selectors.hitSoundSelector.value;
		});
	}
}