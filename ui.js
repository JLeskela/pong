//ui.js
class Ui {
	drawScore(players ) {
		for (const p of players) {
			this.drawText(scoreTextFont, scoreTextColor, p.score,
			120 + players.indexOf(p)*(canvas.width  - 260), scoreTextPosY);
		}
	}	
	drawText(font, color, text, x, y) {
		ctx.font = font;
		ctx.fillStyle = color;
		ctx.fillText(text, x, y);
	}
	
	startPrompt() {
		this.drawText(startTextFont, startTextColor,
		"PRESS ANY KEY TO START", startTextPosX, startTextPosY);
	}
}