//config.js
/*********DEFINE GLOBAL CONSTANTS AND VARIABLES*********/
const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

//player
const pWidth = 15;
const pHeight = 140;
const p1PosX = 40;
const p2PosX = canvas.width - pWidth - p1PosX;
const p1UpCode = 87;
const p1DownCode = 83;
const p2UpCode = 38;
const p2DownCode = 40;
const pStartPosY = canvas.height / 2 - pHeight / 2;
let pColor = "#8a0833";
const aiSpeed = 3.2;
const pSpeed = 3.5;
const maxVelY = 7;

//ball
const sideLength = 14;
const ballVelX = 3;
const ballPosX = canvas.width / 2 - sideLength / 2;
const ballPosY = canvas.height / 2 - sideLength / 2;
let ballColor = "#2666a3"
const bVelXMultiplier = 1.05;

//UI
let scoreTextColor = "#7c66c4";
const scoreTextFont = "30px Impact";
const scoreTextPosY = 50;
let startTextColor = "#15bf9a";
const startTextFont = "40px Jokerman";
const startTextPosX = canvas.width / 5;
const startTextPosY = canvas.height / 3;