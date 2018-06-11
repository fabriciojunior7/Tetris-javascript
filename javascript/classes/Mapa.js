function Mapa(){
	
	//ATRIBUTOS
	this.blocos = [];

	//METODOS
	this.desenhar = function(){
		strokeWeight(1);
		stroke(255);
		fill(204, 102, 0);
		for(var i=0; i<this.blocos.length; i++){
			for(var j=0; j<this.blocos[i].pontos.length; j++){
				x = (this.blocos[i].pontos[j]%10)*dimensao+largura*0.25;
				y = (floor(this.blocos[i].pontos[j]/10))*dimensao+22;
				rect(x+1, y, dimensao-2, dimensao-2);
			}
		}
		if(frameCount % 30 == 0){
			this.descer();
		}
	}

	this.novoBloco = function(){
		bloco = new Bloco(round(random(1, 6)));
		this.blocos.push(bloco);
	}

	this.descer = function(){
		for(var i=0; i<this.blocos.length; i++){
			if(!this.blocos[i].congelado){
				this.blocos[i].descer();
			}
		}
	}

	this.esquerda = function(){
		for(var i=0; i<this.blocos.length; i++){
			if(!this.blocos[i].congelado){
				this.blocos[i].esquerda();
			}
		}
	}

	this.direita = function(){
		for(var i=0; i<this.blocos.length; i++){
			if(!this.blocos[i].congelado){
				this.blocos[i].direita();
			}
		}
	}

	this.congelar = function(){
		for(var i=0; i<this.blocos.length; i++){
			for(var j=0; j<this.blocos[i].pontos.length; j++){
				
			}
		}
	}
}