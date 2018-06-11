var tela;
var planoDeFundo;
var largura = 600;
var altura = 640;
var dimensao = 30;

var mapa;

function setup(){
	frameRate(60);
	tela = createCanvas(largura, altura);
	planoDeFundo = new planoDeFundo();
	mapa = new Mapa();
}

function draw(){
	background(0);
	mapa.desenhar();
	planoDeFundo.desenhar();
	if(frameCount % 120 == 0){
		mapa.novoBloco();
	}
}

function windowResized(){
	
}

function keyPressed(){
	if(keyCode == 37 || keyCode == 65){
		mapa.esquerda();
	}
	else if(keyCode == 39 || keyCode == 68){
		mapa.direita();
	}
}