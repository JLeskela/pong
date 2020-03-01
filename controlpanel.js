//controlpanel.js
const pColorPicker = document.getElementById("pColor");
const ballColorPicker = document.getElementById("ballColor");
const canvasColorPicker = document.getElementById("canvasColor");
const borderColorPicker = document.getElementById("borderColor");
const scoreTextColorPicker = document.getElementById("scoreTextColor");
const startTextColorPicker = document.getElementById("startTextColor");
const hitSoundSelector = document.getElementById("hitSound");
const ballVelXSelector = document.getElementById("ballVelX");
const aiSpeedSelector = document.getElementById("aiSpeed");
const borderStyleSelector = document.getElementById("borderStyle");

class Controlpanel {
	static changeSoundSource() {
		pong.hitSound = pong.wallSound = hitSoundSelector.value;
	}
	static changePColor() {
		pColor = pColorPicker.value;
		pong.draw();
	}
	static changeBallColor() {
		ballColor = ballColorPicker.value;
		pong.draw();
	}
	
	static changeCanvasColor() {
		canvas.style.backgroundColor = canvasColorPicker.value;
	}
	
	static changeBorderColor() {
		canvas.style.borderColor = borderColorPicker.value;
	}
	
	static changeScoreColor() {
		scoreTextColor = scoreTextColorPicker.value;
		pong.draw();
	}
	
	static changeStartTextColor() {
		startTextColor = startTextColorPicker.value;
		pong.draw();
	}
	
	static changeBorderStyle() {
		canvas.style.borderStyle = borderStyleSelector.value;
		canvas.style.borderLeft = canvas.style.borderRight = "none";
	}
}
/*
let changeSoundSource = () => pong.hitSound = pong.wallSound = hitSoundSelector.value;
let changePColor = () => {
	pColor = pColorPicker.value;
	pong.draw();
}
let changeBallColor = () => {
	ballColor = ballColorPicker.value;
	pong.draw();
}
let changeCanvasColor = () => canvas.style.backgroundColor = canvasColorPicker.value;
let changeBorderColor = () => canvas.style.borderColor = borderColorPicker.value;
let changeScoreColor = () => {
	scoreTextColor = scoreTextColorPicker.value;
	pong.draw();
}
let changeStartTextColor = () => {
	startTextColor = startTextColorPicker.value;
	pong.draw();
}
let changeBorderStyle = () =>  {
	canvas.style.borderStyle = borderStyleSelector.value;
	canvas.style.borderLeft = canvas.style.borderRight = "none";
}
*/