function planoDeFundo(){
	
	//Desenhar
	this.desenhar = function(){
		noStroke();
		//Barras
		this.barrasVerticais();
		this.barrasHorizontais();
		//Texto
		this.texto();
		//Grade
		this.grade();
	}

	//Texto
	this.texto = function(){
		fill(255);
		textSize(18);
		text("SCORE", 10, 25);

		this.logo();
	}

	//Barras
	this.barrasVerticais = function(){
		fill(255);
		rect(largura*0.25, 20, 2, altura-40);
		rect(largura*0.75, 20, 2, altura-40);
	}

	this.barrasHorizontais = function(){
		fill(255);
		rect(largura*0.25+1, 20, largura*0.5, 2);
		rect(largura*0.25+1, altura - 22, largura*0.5, 2);
	}

	this.logo = function(){
		fill(255);
		textSize(10);
		text("Fabricio Junior", 5, altura-5);
	}

	//Grade
	this.grade = function(){
		strokeWeight(1);
		stroke(255, 255, 255, 25);
		//Linhas Verticais
		for(var i=0; i<11; i++){
			line(largura*0.25+(i*dimensao)+1, 20, largura*0.25+(i*dimensao)+1, altura-22);
		}
		//Linhas Horizontais
		for(var i=0; i<20; i++){
			line(largura*0.25, i*dimensao+20, largura*0.75, i*dimensao+20);
		}
	}

}