//rectangle.js
import cfg from './config.js'
import Pong from './pong.js'

export default class Rectangle {
	constructor(x, y, w, h, color) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = color;
	}
	//methods used to calculate collisions
	get left()
	{
		return this.x;
	}
	get right()
	{
		return this.x + this.w;
	}
	get top()
	{
		return this.y;
	}
	get bottom()
	{
		return this.y + this.h;
	}
	
	draw(color) {
		cfg.ctx.fillStyle = color;
		cfg.ctx.fillRect(this.x, this.y, this.w, this.h);
	} 
}