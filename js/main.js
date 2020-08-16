var c = document.getElementById("ardoise");
var eraser = document.getElementById("reset");
var palette = document.getElementById("palette");
var color;
var size;
var pinceau;
var ctx = c.getContext("2d");
var positionX;
var positionY;

var draw = false;

function onMouseMove(e) {

if (draw == true){
		var x = e.offsetX;
		var y = e.offsetY;

		ctx.beginPath();
		ctx.moveTo(positionX, positionY);
		ctx.lineTo(x, y);
		ctx.closePath();

		positionX = x;
		positionY = y;
		ctx.strokeStyle = color;
		ctx.lineWidth = size;
		ctx.stroke();
}

}

function onMouseDown(e) {

	draw = true;

	positionX = e.offsetX;
	positionY = e.offsetY;
}

function onMouseUp(e) {

	draw = false;
}

function onMouseLeave(e) {

	draw = false;
}

function onSelectColor() {
	
	color = $(this).data('color');
}

$(".color").on('click', onSelectColor);


function onSelectSize() {

	size = $(this).data('size');
}

$(".btn").on('click', onSelectSize);

function onSelectEraser() {

	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, 900, 600);

}

function onSelectStylo() {

	palette.classList.toggle('hide');

}

function onSelectColorPicker(e) {

	posX = e.offsetX;
	posY = e.offsetY
		
	var imgData = ctxp.getImageData(posX, posY, 1, 1);
console.log(imgData);
	color = "rgba("+ imgData.data[0] + "," + imgData.data[1] + "," + imgData.data[2] + "," + imgData.data[3] + ")";
	
}

///////////////////////////////////////////////

c.addEventListener('mousemove', onMouseMove);
c.addEventListener('mousedown', onMouseDown);
c.addEventListener('mouseup', onMouseUp);
c.addEventListener('mouseenter', onMouseLeave);
eraser.addEventListener('click', onSelectEraser);
stylo.addEventListener('click', onSelectStylo);
palette.addEventListener('click', onSelectColorPicker);

///////////////////////////////////////////////

//////////////**Gradiation Verticale**///////////////

var ctxp = palette.getContext("2d");
var gradient = ctxp.createLinearGradient(0,0,300,0);

gradient.addColorStop(0, "rgb(255,0,0)");     // Départ
gradient.addColorStop(0.15, "rgb(255,0,255)"); 
gradient.addColorStop(0.33, "rgb(0,0,255)");
gradient.addColorStop(0.49, "rgb(0,255,255)");
gradient.addColorStop(0.67, "rgb(0,255,0)");
gradient.addColorStop(0.84, "rgb(255,255,0)");
gradient.addColorStop(1, "rgb(255,0,0)");  // Arrivée 
    
ctxp.fillStyle = gradient;            // Affectation au remplissage
ctxp.fillRect(0,0,palette.width,palette.height);

/////////////**Gradiation Horizontale**//////////////

var gradient = ctxp.createLinearGradient(0,0,0,300);

gradient.addColorStop(0, "rgba(255,255,255,1)");
gradient.addColorStop(0.5, "rgba(255,255,255,0)");
gradient.addColorStop(0.5, "rgba(0,0,0,0)");
gradient.addColorStop(1, "rgba(0,0,0,1)");

ctxp.fillStyle = gradient;            // Affectation au remplissage
ctxp.fillRect(0,0,palette.width,palette.height);
  

