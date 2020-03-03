//controlpanel.js
import cfg from './config.js';
import Pong from './pong.js';

export const pColorPicker = document.getElementById("pColor");
export const ballColorPicker = document.getElementById("ballColor");
export const canvasColorPicker = document.getElementById("canvasColor");
export const borderColorPicker = document.getElementById("borderColor");
export const scoreTextColorPicker = document.getElementById("scoreTextColor");
export const startTextColorPicker = document.getElementById("startTextColor");
export const hitSoundSelector = document.getElementById("hitSound");
export const ballVelXSelector = document.getElementById("ballVelX");
export const aiSpeedSelector = document.getElementById("aiSpeed");
export const borderStyleSelector = document.getElementById("borderStyle");

export default class Controlpanel {
	static addOnChangeListeners(pong) {
		pColorPicker.addEventListener("change", (e) => {
			cfg.PLAYER_COLOR = pColorPicker.value;
			pong.draw();
		});
		
		ballColorPicker.addEventListener("change", (e) => {
			cfg.BALL_COLOR = ballColorPicker.value;
			pong.draw();
		});
		
		canvasColorPicker.addEventListener("change", (e) => {
			cfg.canvas.style.backgroundColor = canvasColorPicker.value;
		});
		
		borderColorPicker.addEventListener("change", (e) => {
			cfg.canvas.style.borderColor = borderColorPicker.value;
		});
		
		scoreTextColorPicker.addEventListener("change", (e) => {
			cfg.SCORE_TEXT_COLOR = scoreTextColorPicker.value;
			pong.draw();
		});
		startTextColorPicker.addEventListener("change", (e) => {
			cfg.START_PROMPT_COLOR = startTextColorPicker.value;
			pong.draw();
		});
		borderStyleSelector.addEventListener("change", (e) => {
			cfg.canvas.style.borderStyle = borderStyleSelector.value;
			cfg.canvas.style.borderLeft = cfg.canvas.style.borderRight = "none";
		});
		hitSoundSelector.addEventListener("change", (e) => {
			pong.hitSound = pong.wallSound = hitSoundSelector.value;
		});
	}
}