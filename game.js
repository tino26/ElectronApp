const { app, BrowserWindow } = require('electron')
var myX=0, myY=500;
var dy=0, jumping=false;


function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600 });

  // and load the index.html of the app.
  win.loadFile('index.html');
}
app.on('ready', createWindow);


function update(){
	myY-=dy;
	if(jumping){
		dy-=0.05;
	}
	if(myY>=502){
		jumping=false;
		dy=0;
		myY=500;
	}
}

function draw(){
	context.fillRect(myX, myY, 30, 30);
}

function keyup(key){
	if(key==32){
		jumping=true;
		dy=3;
	}
}